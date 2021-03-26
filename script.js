var vue_box = new Vue (
    {
        el : "#todo_list",
        data :{
            new_item : "Cose da fare",
            lista : [
                'Comprare Nachos',
                'Portare a spasso Fltch',
                'Doccia',
                'Decidere cosa mangiare per cena'
            ]
        },
        methods : {
            
            removeItem : function (item_index) {
                this.lista.splice(item_index, 1);
            },

            addItem : function () {
                if (this.new_item != "") {
                    this.lista.push(this.new_item);
                    this.new_item = "";
                }
            }
        }
    }
)