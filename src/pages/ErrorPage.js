import React from 'react'

const ErrorPage = () => {
  return (
    <div className="errorr">
    <div style={styles.container} className="">
      <h1 style={styles.error} className="text-primary">
        404
      </h1>
      <div style={styles.page}>
        Ooops!!! The page you are looking for is not found
      </div>
      <a style={styles.backHome} href="/">
        Back to home
      </a>
    </div>
  </div>
  )
}

export default ErrorPage

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#E7FFFF",
    padding: "4rem 2rem",
  },
  error: {
    fontSize: "150px",
    textShadow:
      "1px 1px 1px #000, 2px 2px 1px #000, 3px 3px 1px #000, 4px 4px 1px #000, 5px 5px 1px #000, 6px 6px 1px #000, 7px 7px 1px #000, 8px 8px 1px #000, 25px 25px 8px rgba(0,0,0, 0.2)",
  },
  page: {
    margin: "2rem 0",
    fontSize: "20px",
    fontWeight: "600",
    color: "#444",
  },
  backHome: {
    display: "inline-block",
    border: "2px solid #222",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "600",
    padding: "0.75rem 1rem 0.6rem",
    transition: "all 0.2s linear",
    boxShadow: "0 15px 15px -11px rgba(0,0,0, 0.4)",
    background: "#222",
    borderRadius: "6px",
    textDecoration: "none", // to remove default underline on anchor tag
  },
};
