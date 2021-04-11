import { Plot_params } from "./../../axidraw/run";
import {
  Id,
  NullableId,
  Paginated,
  Params,
  ServiceMethods,
} from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { plot, disable } from "../../axidraw/run";

interface Data {}

interface ServiceOptions {}

export class Scribe implements ServiceMethods<Data> {
  app: Application;
  options: ServiceOptions;

  constructor(options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find(params?: Params): Promise<Data[] | Paginated<Data>> {
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get(id: Id, params?: Params): Promise<Data> {
    return {
      id,
      text: `A new message with ID: ${id}!`,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(data: any, params?: Params): Promise<Data> {
    if (Array.isArray(data))
      return Promise.all(data.map((current) => this.create(current, params)));

    const {
      filename,
      pen_pos_down,
      pen_pos_up,
      speed_pendown,
      speed_penup,
      accel,
      pen_rate_lower,
      pen_rate_raise,
      pen_delay_down,
      pen_delay_up,
    } = data;

    plot({
      filename,
      pen_pos_down,
      pen_pos_up,
      speed_pendown,
      speed_penup,
      accel,
      pen_rate_lower,
      pen_rate_raise,
      pen_delay_down,
      pen_delay_up,
    });

    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: NullableId, data: Data, params?: Params): Promise<Data> {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async patch(id: NullableId, data: Data, params?: Params): Promise<Data> {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove(id: NullableId, params?: Params): Promise<Data> {
    disable();
    return { id };
  }
}
