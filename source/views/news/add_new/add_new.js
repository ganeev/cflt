RAD.view("view.add_new", RAD.Blanks.View.extend({
    url: 'source/views/news/add_new/add_new.html',
    events: {
        'click a.close': 'closeModal',
        'click #addNew': 'addNew',
        'keyup #text2': 'setTitle',
        'keyup #textfield1': 'setText'
    },
    eventModel: RAD.model('add_new'),
    onInitialize: function(){
        this.eventModel.clear();
    },

    onEndRender: function(){
        var self = this;
        var datepicker = this.$('#text1').datepicker();
        var imageInput = this.$('#imageInput');
        var options = {
            container_id: '.iphone',
            content: 'view.phone_preview',
            animation: 'none',
            extras: {
                model: this.eventModel
            }
        };
        this.publish('navigation.show', options);

        datepicker.change(function(){
            var date = +$(this).datepicker('getDate');
            self.eventModel.set('date', date);
        });

        imageInput.change(function(){
            var preview = document.getElementById('previewImg');
            var file    = this.files[0];
            var reader  = new FileReader();
            if (file.type !== "image/jpeg"){
                alert('Недопустимый тип файла');
                return;
            }
            if (file.size > 2e4){
                alert('Размер файла не должен превышать 20000 байт');
                return;
            }
            reader.onloadend = function () {
                preview.src = reader.result;
                self.eventModel.set('img', reader.result);
            }
            if (file) {
                reader.readAsDataURL(file);
            } else {
                preview.src = "";
            }
        });
    },
    closeModal: function(){
        var options = {
            container_id: '.iphone',
            content: 'view.phone_preview',
            animation: 'none',
            destroy: true
        };

        this.publish('navigation.show', options);
        this.publish('navigation.popup.close', {
            content: 'view.add_new',
            destroy: true
        });

    },
    setTitle: function(){
        this.eventModel.set('title', $('#text2').val());
    },
    setText: function(){
        this.eventModel.set('text', $('#textfield1').val());
    },
    addNew: function(){
        var self = this;
        this.eventModel.save({}, {
            success: function(model){
                self.closeModal();
                RAD.model('news').add(model);
            },
            wait: true
        });
    }
}));