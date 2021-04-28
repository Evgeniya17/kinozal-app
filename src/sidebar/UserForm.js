import React,{Component} from 'react';
import './UserForm.css';


class UserForm extends Component{
    constructor(props){
        super(props)
        this.state = {show : true};
        this.showHide = this.showHide.bind(this)
    }
    showHide(){
        const {show} = this.state;
        this.setState({show : !show})
    }
    render(){
        return(
            <div className="form-block">
                <div className="form-header">
                    <h2 className="form-title ">Пользователь</h2>
                    <h3 className="form-icon" icon-title="Вход" onClick={this.showHide}><i className="fas fa-sign-in-alt"/></h3> 
                    <h3 className="form-icon" icon-title="Регистрция" onClick={this.showHide}><i className="far fa-user" /></h3> 
                </div>
                <form id="user-form" action="#">
                    <div>
                        <input type="text" name="name" id="username" placeholder="Логин"/>
                        <input type="password" id="user-pwd" name="pwd" placeholder="Пароль"/>
                        <input type="submit" id="enter-btn" value="Вход"/>
                    </div>
                </form>
                <form id="registration-form" action="#" >
                    <div>
                        <input type="text" name="name" id="name" placeholder="Логин"/>
                        <input type="password" id="pwd" name="pwd" placeholder="Пароль"/>
                        <input type="email" id="email" name="email" placeholder="Email"/>
                        <input type="submit" id="registration-btn" value="Регистрация"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserForm;