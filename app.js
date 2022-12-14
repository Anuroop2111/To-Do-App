const app = Vue.createApp({
    data(){
        return {
            show_save_btn : false,
            title : "",
            task_input_val : "",
            task_ : [],
            List_ : [
                // {title:"",tasks : []} // This is the master List of all newly created lists.
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
            
            this.task_.push(this.task_input_val)
            console.log(`task_ = ${this.task_}`)
            this.task_input_val = ""
        },

        remove_(k){
            
        this.task_.splice(k, 1);
    
        },

        delTask(){
            console.log("del")
        },

        save_to_list(){
            this.List_.push({
                title_ : this.title,
                tasks : this.task_
            })
            console.log(this.List_[0].tasks)
            this.title = ""
            this.task_ = []
        },

        show_list(){
            console.log("called show_list")
            var len_ = this.List_.length
            for (let i = 0; i<len_; i++){
                // console.log("inside for loop")
                console.log(`Title : ${this.List_[i].title_}, Tasks : ${this.List_[i].tasks}`)
            }
        }
    }


})

app.mount('#addNote')