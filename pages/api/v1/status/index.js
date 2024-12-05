function status(request, response) {
  response.status(200).json({ game: "Signalis" });
}

export default status
