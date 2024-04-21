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
    1: { name: 'A', color: 'red' },
    2: { name: 'B', color: 'yelllow' },
    3: { name: 'Call', color: 'lime' },
    4: { name: 'Female', color: 'blue' },
    5: { name: 'Few', color: 'purple' },
    6: { name: 'G', color: 'red' },
    7: { name: 'Help', color: 'yelllow' },
    8: { name: 'Hello', color: 'lime' },
    9: { name: 'Love', color: 'blue' },
    10: { name: 'Mirror', color: 'purple' },
    11: { name: 'Namaste', color: 'red' },
    12: { name: 'Nice', color: 'yelllow' },
    13: { name: 'Ok', color: 'lime' },
    14: { name: 'Smile', color: 'blue' },
    15: { name: 'Sorry', color: 'purple' },
    16: { name: 'Yellow', color: 'red' }
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    for (let i = 0; i <= boxes.length; i++) {
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            // Extract variables
            const [y, x, height, width] = boxes[i]
            const text = classes[i]

            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'black'
            ctx.font = '30px Arial'

            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i] * 100), x * imgWidth, y * imgHeight - 10)
            ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 1.5);
            ctx.stroke()
        }
    }
}