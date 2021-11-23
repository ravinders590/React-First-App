import React,{useState,useEffect} from 'react';
import './calculator.css'; 

function Calculator(){

	const[result,setOutput] = useState("");


	const setnumber = (e) => {
		try{
			setOutput(result.concat(e.target.value));
		}catch(err){
			setOutput("Error");
		}
		
	}

	const dataclear = () => {
		setOutput("");	
	}

	const calculate = () => {
		try{
			setOutput(eval(result).toString());
		}catch(err){
			setOutput("Error");
		}	
	}
	const square = (e) => {
		try{
			setOutput(Math.pow(result,2));				
			
		}catch(err){
			setOutput("Error");
		}	
	}
	const cube = (e) => {
		try{
			setOutput(Math.pow(result,3));				
			
		}catch(err){
			setOutput("Error");
		}	
	}
	const tangent = (e) => {
		try{
			if(e.target.value == 'sin'){
				setOutput(Math.sin(result));
			}else if(e.target.value == 'cos'){
				setOutput(Math.cos(result));
			}else if(e.target.value == 'tan'){
				setOutput(Math.tan(result));
			}else{

			}				
			
		}catch(err){
			setOutput("Error");
		}	
	}

	return (
		<>
			<div className="calculator-wrapper" style={{backgroundImage:`url('calc.jpg')`}}>
				<div className="calculator-content">
					<div className="calculator-output">
						<input type="text" id="output" className="form-control" value={result} />
					</div>  
					<div className="calculator-input">
						<div className="row">
							<div className="col-4">
								<button type="button" value="sin" className="btn btn-primary btn-style" onClick={tangent}>Sin</button>								
							</div>
							<div className="col-4">
								<button type="button" value="cos" className="btn btn-primary btn-style" onClick={tangent}>Cos</button>
							</div>
							<div className="col-4">
								<button type="button" value="tan" className="btn btn-primary btn-style" onClick={tangent}>tan</button>
							</div>
						</div>
						<div className="row">
							<div className="col-3">
								<button type="button" value="7" className="btn btn-primary btn-style" onClick={setnumber}>7</button>								
							</div>
							<div className="col-3">
								<button type="button" value="8" className="btn btn-primary btn-style" onClick={setnumber}>8</button>
							</div>
							<div className="col-3">
								<button type="button" value="9" className="btn btn-primary btn-style" onClick={setnumber}>9</button>
							</div>
							<div className="col-3">
								<button type="button" value="/" className="btn btn-primary btn-style" onClick={setnumber}>/</button>
							</div>
						</div>
						<div className="row">
							<div className="col-3">
								<button type="button" value="4" className="btn btn-primary btn-style" onClick={setnumber}>4</button>								
							</div>
							<div className="col-3">
								<button type="button" value="5" className="btn btn-primary btn-style" onClick={setnumber}>5</button>
							</div>
							<div className="col-3">
								<button type="button" value="6" className="btn btn-primary btn-style" onClick={setnumber}>6</button>
							</div>
							<div className="col-3">
								<button type="button" value="*" className="btn btn-primary btn-style" onClick={setnumber}>*</button>
							</div>
						</div>
						<div className="row">
							<div className="col-3">
								<button type="button" value="1" className="btn btn-primary btn-style" onClick={setnumber}>1</button>								
							</div>
							<div className="col-3">
								<button type="button" value="2" className="btn btn-primary btn-style" onClick={setnumber}>2</button>
							</div>
							<div className="col-3">
								<button type="button" value="3" className="btn btn-primary btn-style" onClick={setnumber}>3</button>
							</div>
							<div className="col-3">
								<button type="button" value="+" className="btn btn-primary btn-style" onClick={setnumber}>+</button>
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<button type="button" value="0" className="btn btn-primary btn-style" onClick={setnumber}>0</button>								
							</div>
							<div className="col-3">
								<button type="button" value="=" className="btn btn-primary btn-style" onClick={calculate}>=</button>
							</div>
							<div className="col-3">
								<button type="button" value="-" className="btn btn-primary btn-style" onClick={setnumber}>-</button>
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<button type="button" value="x^3" className="btn btn-primary btn-style" onClick={cube}>x<sup>3</sup></button>								
							</div>
							<div className="col-6">
								<button type="button" value="x^2" className="btn btn-primary btn-style" onClick={square}>x<sup>2</sup></button>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<button type="button" value="" className="btn btn-primary btn-style" onClick={dataclear}>Clear</button>
							</div>
						</div>
					</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
				</div>
			</div>
		</>

	);
}
export default Calculator;