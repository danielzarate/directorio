

document.addEventListener('DOMContentLoaded',()=>{
    Dropzone.autoDiscover = false;
    
    if(document.querySelector('#dropzone')){

        const dropzone = new Dropzone('div#dropzone',{
            url:'/imagenes/store',
            dictDefaultMessage:'Sube hasta 10 imagenes',
            maxFiles:10,
            required:true,
            acceptedFiles:".png,.jpg,.gif,.jpeg",
            headers:{
                'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content
            },
            success:function(file, respuesta){
                console.log(file);
                console.log(respuesta);
            },
            sending:function(file, xhr, formData){
                formData.append('uuid',document.querySelector('#uuid').value);
                console.log('enviando');
            }
        })

    }
    

})