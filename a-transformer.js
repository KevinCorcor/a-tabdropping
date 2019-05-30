module.exports = function(el, context) {
    if (el.getAttributeValue('target').value==="_blank"){
        el.setAttributeValue('rel', 
            (!el.hasAttribute('rel')? 
                context.builder.literal('noreferrer noopener') : 
                context.builder.literal(el.getAttribute('rel') + 'noreferrer noopener')))
    }
}