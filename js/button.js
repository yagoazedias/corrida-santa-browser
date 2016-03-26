var Button = (function()
{
    // Dimension and space properties. (X axis, Y axis, Width size ...)
    this.x = 50;
    this.y = 425;
    this.w = 170;
    this.h = 68;
    
    // Visual proprerties.
    this.image = new Image();
    this.image.src = "./img/buttons/play.png";
    
    // This is the button update, here all button functions will enable.
    this.update = (function()
    {
        
    });
    
    // This is the button draw, here all button visuals will be draw.
    this.draw = (function()
    {
        canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    });
});

var button = [];

for(var i = 0; i < 3; i++)
{ button[i] = new Button(); }