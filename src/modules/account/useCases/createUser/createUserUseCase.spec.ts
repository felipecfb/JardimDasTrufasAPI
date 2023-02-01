import { describe, it, beforeEach } from "vitest";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCases";

let usersRepositoryInMemory: IUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create Account", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
  })

  it("should be able to create an account", () => {
    
  })
})