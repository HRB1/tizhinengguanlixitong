import { observable, action, decorate} from 'mobx'
class Exercise {
    price = 0; 
    getList(){
        this.list = ['1111']
    }
}
decorate(Exercise, {
    price: observable,
    getList: action
})
export default new Exercise()