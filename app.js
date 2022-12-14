const app = Vue.createApp({
    
    data(){
        return {
            show_save_btn : false,
            head_input_val : "",
            task_input_val : "",
            task_ : []
        }
    },
    methods: {
        // head_fn() {
        //     var head = document.getElementById("Heading").value
        //     console.log(head)
        // },

        renameHead(){

        },


        addTask(){
            this.task_.push(this.task_input_val)
            this.task_input_val = ""
        },

        remove_(k){
            
        this.task_.splice(k, 1);
    
        },

        delTask(){
            console.log("del")
        },

        save_task_block_to_list(){

        }
    }


})

app.mount('#addNote')