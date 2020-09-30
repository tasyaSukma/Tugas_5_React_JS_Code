import React, {Component} from 'react';
import FormMakanan from './../Form/FormMakanan';
import DaftarMakanan from './../Lib/DaftarMakanan';


const listmakanan = [
{
	NamaMakanan : 'Nasi Padang',
	Harga : '20.000'
},
{
	NamaMakanan : 'Sate',
	Harga : '20.000'	
},
{
	NamaMakanan : 'Soto',
	Harga : '10.000'
},
{
	NamaMakanan : 'Nasi Uduk',
	Harga : '10.000'
},
{
	NamaMakanan : 'Nasi Kuning',
	Harga : '15.000'
},
{
	NamaMakanan : 'Ayam Geprek',
	Harga : '15.000'
},
{
	NamaMakanan : 'Pecel Lele',
	Harga : '15.000'
},
{
	NamaMakanan : 'Pecel',
	Harga : '10.000'
},
{
	NamaMakanan : 'Mie Ayam',
	Harga : '10.000'
}]

class MenuMakanan extends Component{
	render(){
		return(
			<div>
				<h3>Daftar Makanan Favorit : </h3>
				<table>
					<tbody>
						<tr>
							{DaftarMakanan.map((data,i) => {
								return(
									<td key={i}>
										<img src={data.img} alt="Product Makanan" width="150" height="100"/>
										<center>
											<p>{data.NamaMakanan}</p>
											<p>Harga : {data.Harga}</p>
										</center>
									</td>
								)
							})}
						</tr>
					</tbody>
				</table>
				<h4>List Makanan</h4>
				{listmakanan.map((data,i) => {
					return(
						<div key={i}>
							<p>{data.NamaMakanan} | Harga : {data.Harga}</p>
						</div>
					)
				})}
				<FormMakanan/>
			</div>
		)
	}
}

export default MenuMakanan;
