const app = Vue.createApp({
    data(){
        return {
            show_save_btn : false,
            // title : "",
            task_input_val : "",
            // task_ : [],
            List_ : [
                {title:"",task_ : []}
            ]
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
            this.List_[0].task_.push(this.task_input_val)
            this.task_input_val = ""
        },

        remove_(k){
            
        this.List_[0].task_.splice(k, 1);
    
        },

        delTask(){
            console.log("del")
        },

        save_to_list(){

        }
    }


})

app.mount('#addNote')