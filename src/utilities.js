export const drawrect = (detections,ctx)=>{
    detections.forEach(prediction => {
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];
        
        const color = 'green';
        ctx.strokeStyle = color;
        ctx.font = '18px Cursive';
        ctx.fillStyle = 'black';
        
        ctx.beginPath();
        ctx.fillText(text,x,y);
        ctx.rect(x,y,width,height);
        ctx.stroke();

    });
}