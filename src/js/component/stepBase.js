import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepBase = function() {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	// const [base, setBase] = useState(null);

	return (
		<>
			<div className="container d-flex flex-column h-100 justify-content-center">
				<h3 className="text-center mb-4" style={{ color: "white" }}>
					Select Your Base
				</h3>
				<button
					type="button"
					value="Vodka"
					id="Q1"
					className="btn btn-primary btn-lg mb-3 p-2"
					onClick={e => actions.setBase(e.target.value)}>
					Vodka
				</button>
				<button
					type="button"
					value="Rum"
					id="Q1"
					className="btn btn-primary btn-lg mb-3 p-2"
					onClick={e => actions.setBase(e.target.value)}>
					Rum
				</button>
				<button
					type="button"
					value="Gin"
					id="Q1"
					className="btn btn-primary btn-lg mb-3 p-2"
					onClick={e => actions.setBase(e.target.value)}>
					Gin
				</button>
				<button
					type="button"
					value="Tequila"
					id="Q1"
					className="btn btn-primary btn-lg mb-3 p-2"
					onClick={e => actions.setBase(e.target.value)}>
					Tequila
				</button>
				<button
					type="button"
					value="Whiskey"
					id="Q1"
					className="btn btn-primary btn-lg mb-3 p-2"
					onClick={e => actions.setBase(e.target.value)}>
					Whiskey
				</button>
				<button
					type="button"
					value="Non Alcoholic"
					id="Q1"
					className="btn btn-primary btn-lg mb-3 p-2"
					onClick={e => actions.setBase(e.target.value)}>
					Non Alcoholic
				</button>
				{/* <div className="card bg-light mb-3 p-2">
					<div className="card-body">
						<button
							onClick={e => setBase(e.target.value)}
							value="Vodka"
							type="button"
							name="radioDisabled"
							id="customRadioDisabled1"
							className="custom-control-input"
						/>
						<label className="custom-control-label" htmlFor="customRadioDisabled1">
							Vodka
						</label>
					</div>
				</div>
				<div className="card bg-light mb-3 p-2">
					<div className="card-body custom-control custom-radio">
						<input
							onClick={e => setBase(e.target.value)}
							value="Rum"
							type="radio"
							name="radioDisabled"
							id="customRadioDisabled2"
							className="custom-control-input"
						/>
						<label className="custom-control-label" htmlFor="customRadioDisabled2">
							Rum
						</label>
					</div>
				</div>
				<div className="card bg-light mb-3 p-2">
					<div className="card-body custom-control custom-radio">
						<input
							onClick={e => setBase(e.target.value)}
							value="Gin"
							type="radio"
							name="radioDisabled"
							id="customRadioDisabled3"
							className="custom-control-input"
						/>
						<label className="custom-control-label" htmlFor="customRadioDisabled3">
							Gin
						</label>
					</div>
				</div>
				<div className="card bg-light mb-3 p-2">
					<div className="card-body custom-control custom-radio">
						<input
							onClick={e => setBase(e.target.value)}
							value="Tequila"
							type="radio"
							name="radioDisabled"
							id="customRadioDisabled4"
							className="custom-control-input"
						/>
						<label className="custom-control-label" htmlFor="customRadioDisabled4">
							Tequila
						</label>
					</div>
				</div>
				<div className="card bg-light mb-3 p-2">
					<div className="card-body custom-control custom-radio">
						<input
							onClick={e => setBase(e.target.value)}
							value="Whiskey"
							type="radio"
							name="radioDisabled"
							id="customRadioDisabled5"
							className="custom-control-input"
						/>
						<label className="custom-control-label" htmlFor="customRadioDisabled5">
							Whiskey
						</label>
					</div>
				</div>
				<div className="card bg-light mb-3 p-2">
					<div className="card-body custom-control custom-radio">
						<input
							onClick={e => setBase(e.target.value)}
							value="Non-Alcoholic"
							type="radio"
							name="radioDisabled"
							id="customRadioDisabled6"
							className="custom-control-input"
						/>
						<label className="custom-control-label" htmlFor="customRadioDisabled6">
							Non Alcoholic
						</label>
					</div>
				</div> */}
				<button
					onClick={async () => {
						let success = await actions.addBase(base);

						if (success) {
							history.push("/questions/1");
						} else {
							alert("something went wrong, please try again");
						}
					}}
					type="button"
					className="btn btn-basic mx-auto w-25">
					Next
				</button>
			</div>
		</>
	);
};
