import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const SongForm = (props) => {
	return (
		<React.Fragment>
			<Form>
				<FormGroup>
					<Label for="add">Add New Song</Label>
					<Input
						type="text"
						name="add"
						id="add"
						placeholder="Add ... "
					/>
          <Button>
            Submit
          </Button>
				</FormGroup>
			</Form>
		</React.Fragment>
	);
};

export default SongForm;
