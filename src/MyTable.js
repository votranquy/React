import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>ten</th>
                <th>tuoi</th>
                <th>gioi tinh</th>
            </tr>
        </thead>
    );
}
const TableContent = props => {
    const rows = props.characterData.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.ten}</td>
                <td>{row.tuoi}</td>
                <td>{row.gioitinh}</td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
};

// const TableBody = props => {
//     const rows = props.characterData.map((row,index)=>{
//         return (
//             <tr key={index}>
//                 <td>{rows.name}</td>
//                 <td>{rows.job}</td>
//             </tr>
//         );
//     }); 
//     return <tbody>{rows}</tbody>;
// }


class MyTable extends Component {
    render(){
        const {characterData}= this.props;
        return(
            <table>
                <TableHeader />
                <TableContent characterData={characterData} />
            </table>
        ); 
    }
}
export default MyTable;