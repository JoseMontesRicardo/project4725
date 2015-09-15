$(document).ready(inicio());
var validador=1

function inicio() {
    $('input,select').change(function() {
       /* validador = 0
       for(var i = 0; i < document.forms[0].length; i++){
                if (document.forms[0].elements[i].value == ''){
                    validador++
                    console.log(validador)
                    
                }
       } */
       validador = 0
       $('.Formulario_registro').find(':input').each( function (){
            var inputs = this
            if ( this.value == '' || this.value == '-' ){
                validador++
            }
       }) ;
  //console.log(document.forms[0].length)
        if ($(this).attr('class') == 'var_10') {
            if (validar_var_16()) {
                color_validar($(this));
                color_validar($('.var_16'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_16'));
            }
            if (validar_var_19()) {
                color_validar($(this));
                color_validar($('.var_19'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_19'));
            }
            if (validar_var_21()) {
                color_validar($(this));
                color_validar($('.var_16'));
                color_validar($('.var_21'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_16'));
                color_invalidar($('.var_21'));
            }
            if (validar_var_23()) {
                color_validar($(this));
                color_validar($('.var_11'));
                color_validar($('.var_21'));
                color_validar($('.var_23'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_11'));
                color_invalidar($('.var_21'));
                color_invalidar($('.var_23'));
            }
            if (validar_var_30()) {
                color_validar($(this));
                color_validar($('.var_30'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_30'));
            }
        } else if ($(this).attr('class') == 'var_11') {
            if (validar_var_17()) {
                color_validar($(this));
                color_validar($('.var_17'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_17'));
            }
            if (validar_var_23()) {
                color_validar($(this));
                color_validar($('.var_10'));
                color_validar($('.var_21'));
                color_validar($('.var_23'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_10'));
                color_invalidar($('.var_21'));
                color_invalidar($('.var_23'));
            }
        } else if ($(this).attr('class') == 'var_16') {
            if (validar_var_16()) {
                color_validar($(this));
                color_validar($('.var_10'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_10'));
            }
            if (validar_var_21()) {
                color_validar($(this));
                color_validar($('.var_10'));
                color_validar($('.var_21'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_21'));
                color_invalidar($('.var_10'));
            }
        } else if ($(this).attr('class') == 'var_17') {
            if (validar_var_17()) {
                color_validar($(this));
                color_validar($('.var_11'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_11'));
            }
        } else if ($(this).attr('class') == 'var_18') {
            if (validar_var_93()) {
                color_validar($(this));
                color_validar($('.var_93'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_93'));
            }
            if (validar_var_94()) {
                color_validar($(this));
                color_validar($('.var_94'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_94'));
            }
        } else if ($(this).attr('class') == 'var_19') {
            if (validar_var_19()) {
                color_validar($(this));
                color_validar($('.var_10'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_10'));
            }
        } else if ($(this).attr('class') == 'var_20') {
            if (validar_var_22()) {
                color_validar($(this));
                color_validar($('.var_22'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_22'));
            }
            if (validar_var_24()) {
                color_validar($(this));
                color_validar($('.var_24'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_24'));
            }
            if (validar_var_26()) {
                color_validar($(this));
                color_validar($('.var_26'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_26'));
            }
            if (validar_var_27()) {
                color_validar($(this));
                color_validar($('.var_27'));
                color_validar($('.var_27_1'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_27'));
                color_invalidar($('.var_27_1'));
            }
            if (validar_var_27_1()) {
                color_validar($(this));
                color_validar($('.var_27_1'));
                color_validar($('.var_27'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_27_1'));
                color_invalidar($('.var_27'));
            }
            if (validar_var_28()) {
                color_validar($(this));
                color_validar($('.var_28'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_28'));
            }
            if (validar_var_29()) {
                color_validar($(this));
                color_validar($('.var_29'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_29'));
            }
            if (validar_var_31()) {
                color_validar($(this));
                color_validar($('.var_31'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_31'));
            }
            if (validar_var_32()) {
                color_validar($(this));
                color_validar($('.var_32'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_32'));
            }
            if (validar_var_53_1()) {
                color_validar($(this));
                color_validar($('.var_53_1'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_1'));
            }
            if (validar_var_53_2()) {
                color_validar($(this));
                color_validar($('.var_53_2'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_2'));
            }
            if (validar_var_53_3()) {
                color_validar($(this));
                color_validar($('.var_53_3'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_3'));
            }
            if (validar_var_53_4()) {
                color_validar($(this));
                color_validar($('.var_53_4'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_4'));
            }
            if (validar_var_53_5()) {
                color_validar($(this));
                color_validar($('.var_53_5'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_5'));
            }
            if (validar_var_53_6()) {
                color_validar($(this));
                color_validar($('.var_53_6'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_6'));
            }
            if (validar_var_53_7()) {
                color_validar($(this));
                color_validar($('.var_53_7'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_7'));
            }
            if (validar_var_53_8()) {
                color_validar($(this));
                color_validar($('.var_53_8'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_8'));
            }
            if (validar_var_53_9()) {
                color_validar($(this));
                color_validar($('.var_53_9'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_9'));
            }
            if (validar_var_53_10()) {
                color_validar($(this));
                color_validar($('.var_53_10'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_10'));
            }
            if (validar_var_53_11()) {
                color_validar($(this));
                color_validar($('.var_53_11'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_11'));
            }
            if (validar_var_53_12()) {
                color_validar($(this));
                color_validar($('.var_53_12'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_12'));
            }
            if (validar_var_53_13()) {
                color_validar($(this));
                color_validar($('.var_53_13'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_13'));
            }
            if (validar_var_53_14()) {
                color_validar($(this));
                color_validar($('.var_53_14'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_14'));
            }
            if (validar_var_53_15()) {
                color_validar($(this));
                color_validar($('.var_53_15'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_15'));
            }
            if (validar_var_53_16()) {
                color_validar($(this));
                color_validar($('.var_53_16'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_16'));
            }
            if (validar_var_53_17()) {
                color_validar($(this));
                color_validar($('.var_53_17'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_17'));
            }
            if (validar_var_53_18()) {
                color_validar($(this));
                color_validar($('.var_53_18'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_18'));
            }
            if (validar_var_53_19()) {
                color_validar($(this));
                color_validar($('.var_53_19'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_19'));
            }
            if (validar_var_53_20()) {
                color_validar($(this));
                color_validar($('.var_53_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_53_20'));
            }
            if (validar_var_75()) {
                color_validar($(this));
                color_validar($('.var_75'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_75'));
            }
            if (validar_var_76()) {
                color_validar($(this));
                color_validar($('.var_76'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_76'));
            }
            if (validar_var_77()) {
                color_validar($(this));
                color_validar($('.var_77'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_77'));
            }
            if (validar_var_78()) {
                color_validar($(this));
                color_validar($('.var_78'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_78'));
            }
        } else if ($(this).attr('class') == 'var_21') {
            if (validar_var_21()) {
                color_validar($(this));
                color_validar($('.var_16'));
                color_validar($('.var_10'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_16'));
                color_invalidar($('.var_10'));
            }
            if (validar_var_23()) {
                color_validar($(this));
                color_validar($('.var_10'));
                color_validar($('.var_11'));
                color_validar($('.var_23'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_10'));
                color_invalidar($('.var_11'));
                color_invalidar($('.var_23'));
            }
        } else if ($(this).attr('class') == 'var_22') {
            if (validar_var_22()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_23') {
            if (validar_var_23()) {
                color_validar($(this));
                color_validar($('.var_10'));
                color_validar($('.var_11'));
                color_validar($('.var_21'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_10'));
                color_invalidar($('.var_11'));
                color_invalidar($('.var_21'));
            }
        } else if ($(this).attr('class') == 'var_24') {
            if (validar_var_24()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_26') {
            if (validar_var_26()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_27') {
            if (validar_var_27()) {
                color_validar($(this));
                color_validar($('.var_20'));
                color_validar($('.var_27_1'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
                color_invalidar($('.var_27_1'));
            }
            if (validar_var_27_1()) {
                color_validar($(this));
                color_validar($('.var_20'));
                color_validar($('.var_27_1'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
                color_invalidar($('.var_27_1'));
            }
        } else if ($(this).attr('class') == 'var_27_1') {
            if (validar_var_27()) {
                color_validar($(this));
                color_validar($('.var_20'));
                color_validar($('.var_27'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
                color_invalidar($('.var_27'));
            }
            if (validar_var_27_1()) {
                color_validar($(this));
                color_validar($('.var_20'));
                color_validar($('.var_27'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
                color_invalidar($('.var_27'));
            }
        } else if ($(this).attr('class') == 'var_28') {
            if (validar_var_28()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_29') {
            if (validar_var_29()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_30') {
            if (validar_var_30()) {
                color_validar($(this));
                color_validar($('.var_10'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_10'));
            }
        } else if ($(this).attr('class') == 'var_31') {
            if (validar_var_31()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_32') {
            if (validar_var_32()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_51') {
            if (validar_var_51()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_52') {
            if (validar_var_52()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_53_1') {
            if (validar_var_53_1()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_2') {
            if (validar_var_53_2()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_3') {
            if (validar_var_53_3()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_4') {
            if (validar_var_53_4()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_5') {
            if (validar_var_53_5()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_6') {
            if (validar_var_53_6()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_7') {
            if (validar_var_53_7()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_8') {
            if (validar_var_53_8()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_9') {
            if (validar_var_53_9()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_10') {
            if (validar_var_53_10()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_11') {
            if (validar_var_53_11()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_12') {
            if (validar_var_53_12()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_13') {
            if (validar_var_53_13()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_14') {
            if (validar_var_53_14()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_15') {
            if (validar_var_53_15()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_16') {
            if (validar_var_53_16()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_17') {
            if (validar_var_53_17()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_18') {
            if (validar_var_53_18()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_19') {
            if (validar_var_53_19()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_53_20') {
            if (validar_var_53_20()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_55') {
            if (validar_var_55()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_59') {
            if (validar_var_60()) {
                color_validar($(this));
                color_validar($('.var_60'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_60'));
            }
        } else if ($(this).attr('class') == 'var_60') {
            if (validar_var_60()) {
                color_validar($(this));
                color_validar($('.var_59'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_59'));
            }
        } else if ($(this).attr('class') == 'var_75') {
            if (validar_var_75()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_76') {
            if (validar_var_76()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_77') {
            if (validar_var_77()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_78') {
            if (validar_var_78()) {
                color_validar($(this));
                color_validar($('.var_20'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_20'));
            }
        } else if ($(this).attr('class') == 'var_79') {
            if (validar_var_79()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_87') {
            if (validar_var_87()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_90') {
            if (validar_var_90()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_93') {
            if (validar_var_93()) {
                color_validar($(this));
                color_validar($('.var_18'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_18'));
            }
        } else if ($(this).attr('class') == 'var_94') {
            if (validar_var_94()) {
                color_validar($(this));
                color_validar($('.var_18'));
            } else {
                color_invalidar($(this));
                color_invalidar($('.var_18'));
            }
        } else if ($(this).attr('class') == 'var_100') {
            if (validar_var_100()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_101') {
            if (validar_var_101()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_102') {
            if (validar_var_102()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_104') {
            if (validar_var_104()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else if ($(this).attr('class') == 'var_106') {
            if (validar_var_106()) {
                color_validar($(this));
            } else {
                color_invalidar($(this));
            }
        } else {
            color_validar($(this));
        }
        console.log(validador)
    });
      /*$('.Formulario_registro').submit(function(){
         if (validador > 0){
                 alert('ERROR: ¡¡HAY CAMPOS INCOMPLETOS¡¡')
                return false;
            } else if (validar_var_16()==true && validar_var_17()==true && validar_var_19()==true && validar_var_21()==true && validar_var_22()==true && validar_var_23()==true && validar_var_24()==true && validar_var_26()==true && validar_var_27()==true && validar_var_27_1()==true && validar_var_28()==true && validar_var_29()==true && validar_var_30()==true && validar_var_31()==true && validar_var_32()==true && validar_var_51()==true && validar_var_52()==true && validar_var_53_1()==true && validar_var_53_2()==true && validar_var_53_3()==true && validar_var_53_4()==true && validar_var_53_5()==true && validar_var_53_6()==true && validar_var_53_7()==true && validar_var_53_8()==true && validar_var_53_9()==true && validar_var_53_10()==true && validar_var_53_11()==true && validar_var_53_12()==true && validar_var_53_13()==true && validar_var_53_14()==true && validar_var_53_15()==true && validar_var_53_16()==true && validar_var_53_17()==true && validar_var_53_18()==true && validar_var_53_19()==true && validar_var_53_20()==true && validar_var_55()==true && validar_var_60()==true && validar_var_75()==true && validar_var_76()==true && validar_var_77()==true && validar_var_78()==true && validar_var_79()==true && validar_var_87()==true && validar_var_90()==true && validar_var_93()==true && validar_var_94()==true && validar_var_100()==true && validar_var_101()==true && validar_var_102()==true && validar_var_104()==true && validar_var_106()==true ){
                return true
            } else {
                        alert('ERROR:  ¡TIENE ERRORES DE VALIDACION!')
                        return false
                     }
             alert('ERROR: ¡¡¡HAY CAMPOS INCOMPLETOS¡¡¡')
            return false;
       })*/
}

function color_validar(param) {
    param.css({
        backgroundColor: '#CCF7B0'
    });
}

function color_invalidar(param) {
    param.css({
        backgroundColor: '#F40B21'
    });
}

function esFechaValida(fecha) {
    if (fecha != undefined && fecha.value != "") {
        fecha = fecha.replace(/-/g, '/');
        var expreg = /^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/;
        if (!expreg.test(fecha)) {
            return false;
        }
        var anio = parseInt(fecha.substring(0, 4));
        var dia = fecha.substring(8, 10);
        var mes = fecha.substring(5, 7);
        switch (mes) {
            case "01":
            case "03":
            case "05":
            case "07":
            case "08":
            case "10":
            case "12":
                numDias = 31;
                break;
            case "04":
            case "06":
            case "09":
            case "11":
                numDias = 30;
                break;
            case "02":
                if (comprobarSiBisisesto(anio)) {
                    numDias = 29
                } else {
                    numDias = 28
                };
                break;
            default:
                return false;
        }
        if (dia > numDias || dia == 0) {
            return false;
        }
        return true;
    }
}

function comprobarSiBisisesto(anio) {
    if ((anio % 100 != 0) && ((anio % 4 == 0) || (anio % 400 == 0))) {
        return true;
    } else {
        return false;
    }
}

function validar_var_10() {}

function vaidar_var_11() {}

function validar_var_16() {
    fecha_afiliacion = $('.var_16').val();
    fecha_nacimiento = $('.var_10').val();
    if (fecha_afiliacion != "" && fecha_nacimiento != "") {
        if (Date.parse(fecha_afiliacion) > Date.parse(fecha_nacimiento)) {
            return true;
        } else {
            alert('16. ERRO: fecha de afiliacion NO debe ser MENOR que FECHA de NACIMIENTO');
            return false;
        }
    } else alert('16. ERRO: la FECHA DE NACIMIENTO O LA FECH DE AFILIACION ESTAN VACIAS');
}

function validar_var_17() {
    sexo = $('.var_11').val();
    p_gestante = $('.var_17').val();
    if (p_gestante != "-") {
        if (sexo == "M") {
            if (p_gestante == 3) {
                return true;
            } else {
                alert('17. ERROR: la variable 17 solo acepta la opcion4 ');
                return false;
            }
        } else if (sexo == "F") {
            if (p_gestante != 3) {
                return true;
            } else {
                alert('17. ERROR: la variable 17 no puede aceptar la opcion 4 ');
                return false;
            }
        } else if (sexo == "-") {
            alert('17. ERROR: la variable 11 esta vacia');
        }
    } else return false;
}

function validar_var_19() {
    menor_18_mese_hijo_de_madre_con_vih = $('.var_19').val();
    fecha_nacimiento = $('.var_10').val();
    if (menor_18_mese_hijo_de_madre_con_vih != "-") {
        if (menor_18_mese_hijo_de_madre_con_vih == 1) {
            if (Date.parse(fecha_nacimiento) >= Date.parse("2012-07-31")) {
                return true;
            } else {
                alert('19. ERROR: la fecha de nacimiento debe ser PORTERIOR a 31/07/2012');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_20() {}

function validar_var_21() {
    fecha_prueba = $('.var_21').val();
    fecha_nacimiento = $('.var_10').val();
    fecha_afiliacion = $('.var_16').val();
    if (fecha_prueba != "") {
        if (esFechaValida(fecha_prueba)) {
            if (fecha_prueba != "1800-01-01" && fecha_prueba != "1811-11-01" && fecha_prueba != "1822-02-01" && fecha_prueba != "1799-01-01") {
                if (Date.parse(fecha_prueba) > Date.parse(fecha_nacimiento)) {
                    if (Date.parse(fecha_prueba) <= Date.parse('2015-02-01') || Date.parse(fecha_prueba) <= Date.parse('2015-07-31')) {
                        return true;
                    } else {
                        alert('21. ERROR: FECHA DE PRUEBA debe ser ANTERIOR a la FECHA DE CORTE');
                        return false;
                    }
                } else {
                    alert('21. ERROR: FECHA DE PRUEBA debe ser POSTERIOR a la FECHA DE NACIMIENTO');
                    return false;
                }
            } else if (fecha_prueba == "1800-01-01") {
                if (Date.parse(fecha_nacimiento) > Date.parse("2013-01-31") && Date.parse(fecha_afiliacion) >= Date.parse(fecha_nacimiento)) {
                    return true;
                } else {
                    alert('21.ERROR: asegurese de corregir los siguientes errores\n \n 1- FECHA DE NACIMIENTO sea posterior a 2013-01-31 \n \n 2- que la FECHA DE AFILIACION sea POSTERIOR o IGUAL a  la FECHA DE NACIMIENTO');
                    return false;
                }
            } else return true;
        } else {
            alert('21.ERROR: LA FECHA debe tener el FORMATO 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_22() {
    fecha_diagnostico_infeccion = $('.var_22').val();
    condicion_del_diagnostico = $('.var_20').val();
    if (fecha_diagnostico_infeccion != "") {
        if (esFechaValida(fecha_diagnostico_infeccion)) {
            if (fecha_diagnostico_infeccion == "1800-01-01") {
                if (condicion_del_diagnostico == 2) {
                    return true;
                } else {
                    alert('22. ERROR: la ----VARIABLE 20--- SOLO acepta la OPCION 3');
                    return false;
                }
            } else if (fecha_diagnostico_infeccion == "1799-01-01") {
                if (condicion_del_diagnostico != 0 && condicion_del_diagnostico != 2) {
                    return true;
                } else {
                    alert('22. ERROR: la ----VARIABLE 20--- NO acepta las OPCIONES 1 NI 2');
                    return false;
                }
            } else return true;
        } else {
            alert('22. ERROR la fecha NO TIENE EL FORMATO 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_23() {
    sexo = $('.var_11').val();
    como_llego = $('.var_23').val();
    fecha_nacimiento = $('.var_10').val();
    fecha_prueba = $('.var_21').val();
    if (como_llego != "-") {
        if (como_llego == 3) {
            if (sexo == "F") {
                return true;
            } else {
                alert('23. ERROR: la---VARIABLE 11--- solo acepta la OPCION 2');
                return false;
            }
        } else if (como_llego == 8) {
            if (Date.parse(fecha_nacimiento) >= Date.parse('2012-07-31')) {
                return true;
            } else {
                alert('23. ERROR: la FECHA DE NACIMIENTO debe ser MAYOR  O IGUAL A 31/07/2012');
                return false;
            }
        } else if (como_llego == 10) {
            if (fecha_prueba == "1799-01-01" || fecha_prueba == "1822-02-01") {
                return true;
            } else {
                alert('23. ERROR: la ---VARIABLE21--- solo acepta las OPCIONES 3 y 4');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_24() {
    aseguramiento = $('.var_24').val();
    condicion_diagnostico = $('.var_20').val();
    if (aseguramiento != "-") {
        if (aseguramiento != 9) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('24. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_26() {
    mecanismo_transmision = $('.var_26').val();
    condicion_diagnostico = $('.var_20').val();
    if (mecanismo_transmision != "-") {
        if (mecanismo_transmision != 9) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('26. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_27() {
    estadio_clinico_mayores = $('.var_27').val();
    estadio_clinico_menores = $('.var_27_1').val();
    condicion_diagnostico = $('.var_20').val();
    if (estadio_clinico_mayores != "-") {
        if (estadio_clinico_mayores == 11) {
            if (estadio_clinico_menores != 13 && estadio_clinico_menores != 14 && estadio_clinico_menores != 15) {
                return true;
            } else {
                alert('27.ERROR: la---VARIABLE27.1--- no acepta las OPCIONES 13, 14 y 15');
                return false;
            }
        } else if (estadio_clinico_mayores == 10) {
            if (condicion_diagnostico != 0) {
                return true;
            } else {
                alert('27. ERROR: la---VARIABLE20---NO ACEPTA OPCION1');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_27_1() {
    estadio_clinico_menores = $('.var_27_1').val();
    estadio_clinico_mayores = $('.var_27').val();
    condicion_diagnostico = $('.var_20').val();
    if (estadio_clinico_menores != "-") {
        if (estadio_clinico_menores == 14) {
            if (estadio_clinico_mayores != 10 && estadio_clinico_mayores != 11 && estadio_clinico_mayores != 12) {
                return true;
            } else {
                alert('27.1.ERROR: la---VARIABLE27--- no acepta las OPCIONES 10 , 11 y 12');
                return false;
            }
        } else if (estadio_clinico_menores == 13) {
            if (condicion_diagnostico != 0) {
                return true;
            } else {
                alert('27.1. ERROR: la---VARIABLE20--- NO ACEPTA la OPCION1');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_28() {
    conteo_linfocitos = $('.var_28').val();
    condicion_diagnostico = $('.var_20').val();
    if (conteo_linfocitos != "") {
        if (conteo_linfocitos <= 10000) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('28. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else if (conteo_linfocitos == "99001" || conteo_linfocitos == "99002" || conteo_linfocitos == "99003" || conteo_linfocitos == "99004") {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('28. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else if (conteo_linfocitos == "99005") {
            return true;
        } else {
            alert('28. ERROR: la---VARIABLE28---la cifra debe ser MENOR O IGUAL A 10000');
            return false;
        }
    } else return false;
}

function validar_var_29() {
    conteo_linfocitos = $('.var_29').val();
    condicion_diagnostico = $('.var_20').val();
    if (conteo_linfocitos != "") {
        if (conteo_linfocitos <= 50000) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('29. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else if (conteo_linfocitos == "99001" || conteo_linfocitos == "99002" || conteo_linfocitos == "99003" || conteo_linfocitos == "99004") {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('29. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else if (conteo_linfocitos == "99005") {
            return true;
        } else {
            alert('29. ERROR: la---VARIABLE28---la cifra debe ser MENOR O IGUAL A 50000');
            return false;
        }
    } else return false;
}

function validar_var_30() {
    fecha_primera_tar = $('.var_30').val();
    fecha_nacimiento = $('.var_10').val();
    if (fecha_primera_tar != "") {
        if (esFechaValida(fecha_primera_tar)) {
            if (fecha_primera_tar != "1800-01-01" && fecha_primera_tar != "1799-01-01" && fecha_primera_tar != "1788-01-01") {
                if (Date.parse(fecha_primera_tar) > Date.parse(fecha_nacimiento)) {
                    if (Date.parse(fecha_primera_tar) <= Date.parse('2015-02-01') || Date.parse(fecha_primera_tar) <= Date.parse('2015-07-31')) {
                        return true;
                    } else {
                        alert('30. ERROR: la fecha de INICION DE LA PRIMERA TAR debe ser ANTERIOR a la FECHA DE CORTE');
                        return false;
                    }
                } else {
                    alert('30. ERROR: la fecha de INICIACION DE LA PRIMERA TAR debe ser POSTERIOR A LA FECHA DE NACIMIENTO');
                    return false;
                }
            } else return true;
        } else {
            alert('30. ERROR: DEBE TENER EL FORMATO 0000-00-00 ');
            return false;
        }
    }
    return false;
}

function validar_var_31() {
    conteo_linfocitos = $('.var_31').val();
    condicion_diagnostico = $('.var_20').val();
    if (conteo_linfocitos != "") {
        if (conteo_linfocitos <= 10000) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('31. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else if (conteo_linfocitos == "99001" || conteo_linfocitos == "99002" || conteo_linfocitos == "99003" || conteo_linfocitos == "99004") {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('31. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else if (conteo_linfocitos == "99005") {
            return true;
        } else {
            alert('31. ERROR: la---VARIABLE31---la cifra debe ser MENOR O IGUAL A 10000');
            return false;
        }
    } else return false;
}

function validar_var_32() {
    conteo_linfocitos = $('.var_32').val();
    condicion_diagnostico = $('.var_20').val();
    if (conteo_linfocitos != "") {
        if (conteo_linfocitos <= 50000) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('32. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else if (conteo_linfocitos == "99001" || conteo_linfocitos == "99002" || conteo_linfocitos == "99003" || conteo_linfocitos == "99004") {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('32. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else if (conteo_linfocitos == "99005") {
            return true;
        } else {
            alert('32. ERROR: la---VARIABLE32---la cifra debe ser MENOR O IGUAL A 50000');
            return false;
        }
    } else return false;
}

function validar_var_51() {
    causa_cambio = $('.var_51').val();
    if (causa_cambio != "") {
        if (causa_cambio != 99) {
            if (causa_cambio <= 20) {
                return true;
            } else {
                alert('51. ERROR: la---VARIABLE51--- debe estar en el rango de [0-20]');
                return false;
            }
        } else return true;
    }
}

function validar_var_52() {
    causa_cambio = $('.var_52').val();
    if (causa_cambio != "") {
        if (causa_cambio != 99) {
            if (causa_cambio <= 40) {
                return true;
            } else {
                alert('52. ERROR: la---VARIABLE52--- debe estar en el rango de [0-40]');
                return false;
            }
        } else return true;
    }
}

function validar_var_53_1() {
    patologia = $('.var_53_1').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.1. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_53_2() {
    patologia = $('.var_53_2').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.2. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_3() {
    patologia = $('.var_53_3').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.3. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_4() {
    patologia = $('.var_53_4').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.4. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_5() {
    patologia = $('.var_53_5').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.5. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_6() {
    patologia = $('.var_53_6').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.6. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_7() {
    patologia = $('.var_53_7').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.7. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_8() {
    patologia = $('.var_53_8').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.8. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_9() {
    patologia = $('.var_53_9').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.9. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_10() {
    patologia = $('.var_53_10').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.10. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_11() {
    patologia = $('.var_53_11').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.11. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_12() {
    patologia = $('.var_53_12').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.12. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_13() {
    patologia = $('.var_53_13').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.13. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_14() {
    patologia = $('.var_53_14').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.14. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_15() {
    patologia = $('.var_53_15').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.15. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_16() {
    patologia = $('.var_53_16').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.16. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_17() {
    patologia = $('.var_53_17').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.17. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_18() {
    patologia = $('.var_53_18').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.18. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_19() {
    patologia = $('.var_53_19').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.19. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_53_20() {
    patologia = $('.var_53_20').val();
    condicion_diagnostico = $('.var_20').val();
    if (patologia != "-") {
        if (patologia == 1) {
            if (condicion_diagnostico == 0) {
                return true;
            } else {
                alert('53.20. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                return false;
            }
        }
        return true;
    } else return false;
}

function validar_var_55() {
    fecha = $('.var_55').val();
    if (esFechaValida(fecha)) {
        return true;
    } else {
        alert('55. ERROR: ---VARIABLE55---el formato soportado es 0000-00-00');
        return false
    };
}

function validar_var_60() {
    momento_genotipificacion = $('.var_60').val();
    resultado_genotipificacion = $('.var_59').val();
    if (momento_genotipificacion != "-") {
        if (momento_genotipificacion == 0) {
            if (resultado_genotipificacion == 0) {
                return true;
            } else {
                alert('60. ERROR: ---VARIABLE59---solo acepta la OPCION1');
                return false
            }
        } else if (momento_genotipificacion == 9) {
            if (resultado_genotipificacion == 2) {
                return true;
            } else {
                alert('60. ERROR: ---VARIABLE59---solo acepta la OPCION3');
                return false
            }
        } else return true;
    } else return false;
}

function validar_var_75() {
    ultimo_conteo_linfocitos = $('.var_75').val()
    condicion_diagnostico = $('.var_20').val();
    if (ultimo_conteo_linfocitos != "") {
        if (esFechaValida(ultimo_conteo_linfocitos)) {
            if (ultimo_conteo_linfocitos != "1800-01-01" && ultimo_conteo_linfocitos != "1799-01-01") {
                if (condicion_diagnostico == 0) {
                    return true;
                } else {
                    alert('75. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                    return false;
                }
            } else return true;
        } else {
            alert('75. ERROR: ---VARIABLE75---el formato soportado es 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_76() {
    conteo_linfocitos = $('.var_76').val();
    condicion_diagnostico = $('.var_20').val();
    if (conteo_linfocitos != "") {
        if (conteo_linfocitos != "88888" && conteo_linfocitos != "99999") {
            if (conteo_linfocitos <= 10000) {
                if (condicion_diagnostico == 0) {
                    return true;
                } else {
                    alert('75. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                    return false;
                }
            } else {
                alert('76. ERROR: la el valor DEBE ser MENOR O IGUAL a 10000');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_77() {
    ultimo_conteo_linfocitos = $('.var_77').val()
    condicion_diagnostico = $('.var_20').val();
    if (ultimo_conteo_linfocitos != "") {
        if (esFechaValida(ultimo_conteo_linfocitos)) {
            if (ultimo_conteo_linfocitos != "1800-01-01" && ultimo_conteo_linfocitos != "1799-01-01") {
                if (condicion_diagnostico == 0) {
                    return true;
                } else {
                    alert('77. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                    return false;
                }
            } else return true;
        } else {
            alert('77. ERROR: ---VARIABLE77---el formato soportado es 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_78() {
    conteo_linfocitos = $('.var_78').val();
    condicion_diagnostico = $('.var_20').val();
    if (conteo_linfocitos != "") {
        if (conteo_linfocitos != "88888" && conteo_linfocitos != "99999") {
            if (conteo_linfocitos <= 50000) {
                if (condicion_diagnostico == 0) {
                    return true;
                } else {
                    alert('78. ERROR: la---VARIABLE20--- solo acepta la OPCION1');
                    return false;
                }
            } else {
                alert('78. ERROR: la el valor DEBE ser MENOR O IGUAL a 50000');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_79() {
    fecha = $('.var_79').val();
    if (fecha != "") {
        if (esFechaValida(fecha)) {
            return true;
        } else {
            alert('79. ERROR: ---VARIABLE79---el formato soportado es 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_87() {
    cantidad = $('.var_87').val();
    if (cantidad != "") {
        if (cantidad != 99) {
            if (cantidad <= 12) {
                return true;
            } else {
                alert('87. ERROR: el valor debe ser MENOR o IGUAL que 12');
                return false;
            }
        } else return true;
    } else return false;
}

function validar_var_90() {
    fecha_inicio = $('.var_90').val();
    if (fecha_inicio != "") {
        if (esFechaValida(fecha_inicio)) {
            return true;
        } else {
            alert('90. ERROR: ---VARIABLE90---el formato soportado es 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_93() {
    antituberculoso = $('.var_93').val();
    tuberculoso = $('.var_18').val();
    if (antituberculoso != "-") {
        if (antituberculoso == 0 || antituberculoso == 1 || antituberculoso == 2 || antituberculoso == 3) {
            if (tuberculoso == 1) {
                return true;
            } else {
                alert('93: ERROR: la ---VARIABLE18---solo acepta la OPCION 2');
                return false;
            }
        } else if (antituberculoso == 9) {
            if (tuberculoso != 1) {
                return true;
            } else {
                alert('93: ERROR: la ---VARIABLE18---NO ACEPTA OPCION 2');
                return false;
            }
        }
    } else return false;
}

function validar_var_94() {
    fecha_inicio = $('.var_94').val();
    tuberculoso = $('.var_18').val();
    if (fecha_inicio != "") {
        if (esFechaValida(fecha_inicio)) {
            if (fecha_inicio != "1800-01-01" && fecha_inicio != "1799-01-01") {
                if (tuberculoso == 1) {
                    return true;
                } else {
                    alert('94: ERROR: la ---VARIABLE18---solo acepta la OPCION 2');
                    return false;
                }
            } else if (fecha_inicio == "1800-01-01") {
                if (tuberculoso != 1) {
                    return true;
                } else {
                    alert('94: ERROR: la ---VARIABLE18---NO ACEPTA OPCION 2');
                    return false;
                }
            } else return true;
        } else {
            alert('94: ERROR: solo soporta el formato de fecha 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_100() {
    fecha = $('.var_100').val();
    if (fecha != "") {
        if (esFechaValida(fecha)) {
            return true;
        } else {
            alert('100: ERROR: solo soporta el formato de fecha 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_101() {
    fecha = $('.var_101').val();
    if (fecha != "") {
        if (esFechaValida(fecha)) {
            return true;
        } else {
            alert('101: ERROR: solo soporta el formato de fecha 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_102() {
    fecha = $('.var_102').val();
    if (fecha != "") {
        if (esFechaValida(fecha)) {
            return true;
        } else {
            alert('102: ERROR: solo soporta el formato de fecha 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_104() {
    fecha = $('.var_104').val();
    if (fecha != "") {
        if (esFechaValida(fecha)) {
            return true;
        } else {
            alert('104: ERROR: solo soporta el formato de fecha 0000-00-00');
            return false;
        }
    } else return false;
}

function validar_var_106() {
    fecha = $('.var_106').val();
    if (fecha != "") {
        if (esFechaValida(fecha)) {
            return true;
        } else {
            alert('106: ERROR: solo soporta el formato de fecha 0000-00-00');
            return false;
        }
    } else return false;
}