import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../styles/publish.css";

export const Publish = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<h1>Que deseas vender?</h1>
					</div>
					<Form className="w-50 bg-white m-5 p-4 rounded d-flex flex-column col-6">
						<h1 className="text-center">Que deseas vender?</h1>
						<Form.Group className="mb-3" controlId="formFile">
							<div>
								{selectedImage && (
									<div>
										<img
											alt="not found"
											width={"250px"}
											src={URL.createObjectURL(selectedImage)}
										/>
										<br />
										<button onClick={() => setSelectedImage(null)}>
											Remove
										</button>
									</div>
								)}
								<br />

								<br />
								<input
									className="form-control"
									type="file"
									name="myImage"
									onChange={(event) => {
										console.log(event.target.files[0]);
										setSelectedImage(event.target.files[0]);
									}}
								/>
							</div>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
							<Form.Label>Precio</Form.Label>
							<Form.Control type="number" placeholder="Precio" />
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Descripción</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
					</Form>
				</div>
			</div>
		</>
	);
};
