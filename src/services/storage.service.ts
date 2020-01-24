import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { STORAGE_KEYS } from "../app/config/storage_keys.config";
import { jsonpCallbackContext } from "@angular/common/http/src/module";

@Injectable()
export class StorageService {

    getLocalUser() : LocalUser{
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if(usr == null){
            return null;
        } else {
            /**
             * O LocalStorage armazena string, logo precisamos converter o resultado para Json
             * para então criar o objeto LocalUser.
            */
            return JSON.parse(usr);      
        }
    }

    setLocalUser(obj : LocalUser){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);
        } else {
            /** 
             *Para salvar em storage devemos converter o objeto para string.
            */
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}
