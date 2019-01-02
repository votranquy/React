import React, {Component} from 'react';
import MyTable from './MyTable';
class Application extends Component {
    render(){
        const list =[
            {
                'ten':'A',
                'tuoi':'20',
                'gioitinh':'N'

            },
            {
                'ten':'B',
                'tuoi':'23'
            },
            {
                'ten':'C',
                'tuoi':'25'
            }
        ];
        return(
            <div className="content">
                <MyTable characterData={list}/>
            </div>
        );

    }
}
export default Application;