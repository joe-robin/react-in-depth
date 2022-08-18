import { Backdrop, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";
import { connect } from "react-redux";

export default function Connect(
  WrappedComponent,
  mapStateToProps,
  mapDispatchToProps
) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class extends Component {
      constructor(props) {
        super(props);
        this.state = { loading: false };

        this.setLoading = this.setLoading.bind(this);
      }

      setLoading(status: Boolean) {
        this.setState({ loading: status });
      }

      componentDidMount() {}

      render() {
        const { loading } = this.state;
        return (
          <>
            <Backdrop open={loading}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems="center"
                minHeight={"100vh"}
              >
                <CircularProgress size={"6rem"} />
              </Box>
            </Backdrop>
            <WrappedComponent {...this.props} setLoading={this.setLoading} />
          </>
        );
      }
    }
  );
}
