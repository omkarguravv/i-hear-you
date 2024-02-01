// export const drawrect = (detections,ctx)=>{
//     detections.forEach(prediction => {
//         const [x,y,width,height] = prediction['bbox'];
//         const text = prediction['class'];
        
//         const color = 'green';
//         ctx.strokeStyle = color;
//         ctx.font = '18px Cursive';
//         ctx.fillStyle = 'black';
        
//         ctx.beginPath();
//         ctx.fillText(text,x,y);
//         ctx.rect(x,y,width,height);
//         ctx.stroke();

//     });
// }
const labelMap = {
    1:{name:'hello', color:'red'},
    2:{name:'namaste', color:'black'},
    // 3:{name:'I Love You', color:'lime'},
    // 4:{name:'Yes', color:'blue'},
    // 5:{name:'No', color:'purple'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'black'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100), x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}