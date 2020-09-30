import React, {Component} from 'react'

class FormMakanan extends Component{
	constructor(props){
		super(props)
		this.state = {
			pesanan : "",
			jumlah : 0
		}
		this.handleChangePesanan = this.handleChangePesanan.bind(this)
		this.handleChangeJumlah = this.handleChangeJumlah.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.otomatisPointer = React.createRef()
	}

	handleChangePesanan(e){
		e.preventDefault()
		this.setState({pesanan : e.target.value})
	}

	handleChangeJumlah(e){
		e.preventDefault()
		this.setState({jumlah : e.target.value})
	}

	handleSubmit(e){
		e.preventDefault()
		alert("Pesananan Anda Adalah : " + this.state.pesanan +" | Jumlah : " + this.state.jumlah)
		this.setState({pesanan : "", jumlah : ""})
		this.otomatisPointer.current.focus()
	}

	render(){
		return(
			<div>
				<center>
					<form onSubmit={this.handleSubmit}>
						<input type="text" value={this.state.pesanan} onChange={(e) => this.handleChangePesanan(e)} placeholder="Pesanan Anda"/>
						<input type="number" value={this.state.jumlah} onChange={(e) => this.handleChangeJumlah(e)}/>
						<input type="submit" value="Pesan" ref={this.otomatisPointer}/>
					</form>
				</center>
			</div>
		)
	}

}

export default FormMakanan;