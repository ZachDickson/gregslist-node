import mongoose from "mongoose";
import Car from "../models/Car";

const _repository = mongoose.model("Cars", Car);

class CarService {
  // static getAll() {
  //   throw new Error("Method not implemented.");
  // }
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async create(body) {
    return await _repository.create(body);
  }
  async  edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update);
  }

  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }

}

const carService = new CarService();
export default carService;
