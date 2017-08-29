angular.module('todoApp', []).controller('todoCtrl', ["$scope", function ($scope) {
    $scope.todos = [
        {
            id:1,
            title: "列表1",
            color: "#00ebff",
            todoCon: [
                {title: "毕业快乐",done: true},
                {title: "学习快乐",done: false},
                {title: "生活快乐",done: true}
            ]
        },
        {
            id:2,
            title: "列表2",
            color: "#ff00fb",
            todoCon: [
                {title: "毕业快乐",done: true}
            ]
        },
        {
            id:3,
            title: "列表3",
            color: "#00ffcc",
            todoCon: [
                {title: "毕业快乐",done: true}
            ]
        },
        {
            id:4,
            title: "列表4",
            color: "#7600ff",
            todoCon: [
                {title: "买房子",done: false},
                {title: "买墨镜",done: true},
                {title: "衣锦还乡",done: false}
            ]
        }
    ];
    //使默认选中最后一个
    $scope.index =$scope.todos.length-1;

    //箭头旋转和内容收缩
    $scope.doneShow=true;
    $scope.doneToggle=function () {
        $scope.doneShow=!$scope.doneShow;
    };
    $scope.doneShow1=true;
    $scope.doneToggle1=function () {
        $scope.doneShow1=!$scope.doneShow1;
    };

    //左侧选择
    $scope.selectList=function (index) {
        $scope.index=index;
        $scope.doneShow=false;
        $scope.doneShow1=false;
    };

    //总计完成项
    $scope.finshNum=function (parms) {
        var num=0;
        $scope.todos[$scope.index]["todoCon"].forEach(function (v,i) {
            if(v.done==parms){
                num++;
            }
        });
        return num;
    };

    //改变完成与否
    $scope.doneChange=function (v,stu) {
        v.done=stu;
    };

    //添加列表
    $scope.colorArr=["#00ebff","#ff00fb","#00ffcc","#7600ff","#ffd200","#b6ff00"];
    $scope.addList=function () {
        var index=$scope.todos.length-1;
        var id=$scope.todos[index].id+1;
        var title="列表"+id;
        var color=$scope.colorArr[(index+1)%6];
        $scope.todos.push(
            {
                id,
                title,
                color,
                todoCon:[]
            }
        );
        $scope.index=$scope.todos.length-1;
    };

    //添加待办项
    $scope.addDone=function (index) {
        $scope.todos[index]["todoCon"].push({
            title:"新增项",
            done:false
        })
    };

    //搜索
    $scope.search="";

    //设置
    $scope.setting=false;
    $scope.setToggle=function (index) {
        $scope.index=index;
        $scope.setting=!$scope.setting;
        $scope.changeTitle=$scope.todos[$scope.index].title;
        $scope.changeColor=$scope.todos[$scope.index].color;
    };
    
    $scope.setColor=function (v) {
        $scope.changeColor=v;
    };

    //设置按钮
    $scope.del=function (index) {
        $scope.todos.splice(index,1);
        $scope.index=$scope.todos.length-1;
    };
    $scope.quxiao=function () {
        $scope.setting=!$scope.setting;
    };
    $scope.sure=function (index) {
        $scope.todos[$scope.index].title=$scope.changeTitle;
        $scope.todos[$scope.index].color=$scope.changeColor;
        $scope.setting=!$scope.setting;
    }

}]);