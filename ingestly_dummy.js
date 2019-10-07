var Ingestly = {
  trackAction: function(action, category, context){
    context.action = action;
    context.category = category;
    console.log(context);
  }
};
