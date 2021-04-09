import {run} from 'node-cmd'

//axicli cookies.svg --speed_pendown 100 --speed_penup 100 --accel 100 --pen_pos_down 8 --pen_pos_up 36 --pen_rate_lower 100 --pen_rate_raise 100 --pen_delay_down 0 --pen_delay_up 0

export const plot = ({filename}:{filename:string}) => {
 
    run(`axicli ./src/axidraw/${filename} --speed_pendown 100 --speed_penup 100 --accel 100 --pen_pos_down 8 --pen_pos_up 36 --pen_rate_lower 100 --pen_rate_raise 100 --pen_delay_down 0 --pen_delay_up 0`, (err, data, stderr)=>{
        console.log(err, data, stderr)
    })
}


export default {
    plot
}