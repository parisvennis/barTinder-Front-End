import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepBase = function() {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [base, setBase] = useState(null);

	return (
		<>
			<div className="container pt-5 d-flex flex-column h-100 justify-content-center">
				<h3 className="text-center mb-4">Select Your Base</h3>
				<div className="card bg-light mb-3 p-2">
					<div className="card-body custom-control custom-radio">
						<input
							onClick={e => setBase(e.target.value)}
							value="Vodka"
							type="radio"
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
							Non-Alcoholic
						</label>
					</div>
				</div>
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
					className="btn btn-primary mx-auto w-25">
					Next
				</button>
			</div>
		</>
	);
};
