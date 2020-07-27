$(document).ready(function(){
    $('.item-card-body').click(function(){
        var getID = $(this).attr('id');
        $('.lista-habilidad li').remove();        
        if(getID==''){return false;}
        $('.block-habilidad').show();
        $('#categorySelect').val(getID);
        $('.item-card-body').removeClass('active');
        $(this).addClass('active');
        var rowCategory = dataCategory[getID];
        $(".lista-categoria li").remove();
        $(".lista-sub-categoria li").remove();
        $.each(rowCategory, function(i, item) {                
            $(".lista-categoria").append('<li cat="'+getID+'" id="'+rowCategory[i].id+'" class="'+'bg-cat-'+getID+'"><a><span class="tab">'+rowCategory[i].nombre+'</span></a></li>');
        });            
            $('.lista-categoria li').click(function(){
                var getCatID = $(this).attr('id');
                var cssCat = $(this).attr('cat');
                $('.lista-categoria li').removeClass('active');
                $(this).addClass('active');
                var rowSubCategory = dataSubCategory[getCatID];
                $(".lista-sub-categoria li").remove();
                $.each(rowSubCategory, function(i, item) {                
                $(".lista-sub-categoria").append('<li id="'+rowSubCategory[i].id+'" class="'+'bg-cat-'+cssCat+'"><a><span class="tab">'+rowSubCategory[i].nombre+'</span></a></li>');
            });            
                    $('.lista-sub-categoria li').click(function(){
                        $('.lista-sub-categoria li').removeClass('active');
                        $(this).addClass('active');
                    });
            });
    });
});