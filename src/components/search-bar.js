import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const SearchBar = (props) => {
	return (
		<React.Fragment>
			<div>
				<Label for="search">Search</Label>
				<Input
					type="text"
					name="search"
					id="search"
					placeholder="Search ... "
				/>
			</div>
		</React.Fragment>
	);
};

export default SearchBar;
