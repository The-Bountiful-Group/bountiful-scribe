import { run } from "node-cmd";

//axicli cookies.svg --speed_pendown 100 --speed_penup 100 --accel 100 --pen_pos_down 8 --pen_pos_up 36 --pen_rate_lower 100 --pen_rate_raise 100 --pen_delay_down 0 --pen_delay_up 0

const default_plot_settings = {
  speed_pendown: 95,
  speed_penup: 95,
  accel: 90,
  pen_pos_down: 8,
  pen_pos_up: 36,
  pen_rate_lower: 50,
  pen_rate_raise: 50,
  pen_delay_down: 0,
  pen_delay_up: 0,
};

interface Plot_params {
  filename: string;
  speed_pendown?: number;
  speed_penup?: number;
  accel?: number;
  pen_pos_down?: number;
  pen_pos_up?: number;
  pen_rate_lower?: number;
  pen_rate_raise?: number;
  pen_delay_down?: number;
  pen_delay_up?: number;
}

export const plot = (params: Plot_params) => {
  const {
    filename,
    speed_pendown,
    speed_penup,
    accel,
    pen_pos_down,
    pen_pos_up,
    pen_rate_lower,
    pen_rate_raise,
    pen_delay_down,
    pen_delay_up,
  } = { ...default_plot_settings, ...params };
  run(
    `axicli ./src/axidraw/${filename} --speed_pendown ${speed_pendown} --speed_penup ${speed_penup} --accel ${accel} --pen_pos_down ${pen_pos_down} --pen_pos_up ${pen_pos_up} --pen_rate_lower ${pen_rate_lower} --pen_rate_raise ${pen_rate_raise} --pen_delay_down ${pen_delay_down} --pen_delay_up ${pen_delay_up}`,
    (err, data, stderr) => {
      console.log(err, data, stderr);
    }
  );
};

export const disable = () => {
  run(`axicli --mode manual --manual_cmd disable_xy`);
};

export default {
  plot,
  disable,
};
