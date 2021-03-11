Vue.createApp({
    data() {
        return {
            inputTaskText: '',
            taskList: [],
            isShowList: true
        }
    },
    methods: {
        onAddTask() {
            this.taskList.push(this.inputTaskText);
            this.inputTaskText = '';
        },
        switchShowHide() {
            this.isShowList = !this.isShowList;
        }
    }

}).mount('#assignment');