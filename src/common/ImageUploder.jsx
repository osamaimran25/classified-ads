import { DropzoneArea } from "material-ui-dropzone";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiDropzoneSnackbar: {
      infoAlert: {
        backgroundColor: "#2f3c7f",
      },
    },
  },
});

const ImageUploder = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <DropzoneArea
        onChange={props.setFiles}
        // onChange={handleAdd}
        filesLimit={props.maxFile}
        initialFiles={props.files}
        maxFileSize={1048576 * props.maxSize}
        showAlerts={["error", "info"]}
        dropzoneText={props.dropzoneText}
        useChipsForPreview={true}
        getDropRejectMessage={() => {
          return "File Size should be less than 10 MB";
        }}
        getFileAddedMessage={(fileName) => {}}
        // fileObjects={props.files}
      />
    </MuiThemeProvider>
  );
};

export default ImageUploder;
