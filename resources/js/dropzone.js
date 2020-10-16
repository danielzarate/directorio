const { default: Axios } = require("axios");


document.addEventListener('DOMContentLoaded',()=>{
    Dropzone.autoDiscover = false;
    
    if(document.querySelector('#dropzone')){

        const dropzone = new Dropzone('div#dropzone',{
            url:'/imagenes/store',
            dictDefaultMessage:'Sube hasta 10 imagenes',
            maxFiles:10,
            required:true,
            addRemoveLinks: true,
            dictRemoveFile: "Eliminar Imagen",
            acceptedFiles:".png,.jpg,.gif,.jpeg",
            headers:{
                'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content
            },
            success:function(file, respuesta){
                console.log(file);
                console.log(respuesta);
                file.nombreServidor=respuesta.archivo;
            },
            sending:function(file, xhr, formData){
                formData.append('uuid',document.querySelector('#uuid').value);
                console.log('enviando');
            },
            removedfile: function(file, respuesta)
            {
                const params = {
                    imagen: file.nombreServidor
                }
                axios.post('/imagenes/destroy', params )
                .then( respuesta =>{
                        console.log(respuesta)
                        //Eliminar del DOM
                        file.previewElement.parentNode.removeChild(file.previewElement);
                    })
            }
        })

    }
    

})