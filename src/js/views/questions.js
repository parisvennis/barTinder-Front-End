import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { StepBase } from "../component/stepBase.js";
// import { StepModifier } from "../component/StepModifier.js";
// import { StepGarnish } from "../component/StepGarnish.js";
import { Redirect, useHistory, useParams } from "react-router-dom";
// import { TestView } from "./test.js";

const steps = {
	0: StepBase
	// 1: StepModifier,
	// 2: StepGarnish
};

export const Questions = function() {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const params = useParams();
	const CurrentView = steps[params.currentstep || 0];
	return (
		<>
			{/* {!store.token ?  */}
			<Redirect to="/questions" />
			{/* //  : ""} */}
			<CurrentView />
		</>
	);
};
