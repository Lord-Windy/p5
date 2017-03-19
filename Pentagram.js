/**
 * Created by sambr on 3/19/2017.
 */


function drawLine(x1,y1,x2,y2) {
    var i,dx,dy,sdx,sdy,dxabs,dyabs,x,y,px,py;

    dx=x2-x1;      /* the horizontal distance of the line */
    dy=y2-y1;      /* the vertical distance of the line */
    dxabs=Math.abs(dx);
    dyabs=Math.abs(dy);
    sdx=Math.sign(dx);
    sdy=Math.sign(dy);
    x=dyabs>>1;
    y=dxabs>>1;
    px=x1;
    py=y1;

    if (dxabs>=dyabs) /* the line is more horizontal than vertical */
    {
        for(i=0;i<dxabs;i++)
        {
            y+=dyabs;
            if (y>=dxabs)
            {
                y-=dxabs;
                py+=sdy;
            }
            px+=sdx;
            console.log("X: " + px + ", Y: " + py);
        }
    }
    else /* the line is more vertical than horizontal */
    {
        for(i=0;i<dyabs;i++)
        {
            x+=dxabs;
            if (x>=dyabs)
            {
                x-=dyabs;
                px+=sdx;
            }
            py+=sdy;
            console.log("X: " + px + ", Y: " + py);
        }
    }

}

function drawCircle(x0, y0) {

    var x = 8; //radius
    var y = 0;
    var err = 0;

    while (x >= y) {
        console.log("X: " + (x0 + x) + ", "+ "Y: " + (y0 + y) + "; ");
        console.log("X: " + (x0 + y) + ", "+ "Y: " + (y0 + x) + "; ");
        console.log("X: " + (x0 - y) + ", "+ "Y: " + (y0 + x) + "; ");
        console.log("X: " + (x0 - x) + ", "+ "Y: " + (y0 + y) + "; ");

        console.log("X: " + (x0 - x) + ", "+ "Y: " + (y0 - y) + "; ");
        console.log("X: " + (x0 - y) + ", "+ "Y: " + (y0 - x) + "; ");
        console.log("X: " + (x0 + y) + ", "+ "Y: " + (y0 - x) + "; ");
        console.log("X: " + (x0 + x) + ", "+ "Y: " + (y0 - y) + "; ");

        console.log("");

        if (err <= 0)
        {
            y += 1;
            err += 2*y + 1;
        }
        if (err > 0)
        {
            x -= 1;
            err -= 2*x + 1;
        }
    }
}

drawCircle(26, 26);
drawLine(26, 18, 21, 31);