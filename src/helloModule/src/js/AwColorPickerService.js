import AwFlexRow from "viewmodel/AwFlexRowViewModel";
import AwFlexColumn from "viewmodel/AwFlexColumnViewModel";

export const awColorPickerRenderFunction = (props) => {
  console.log("props are",props)
  console.log("selected color", props.selectedColor.value)
  const { viewModel } = props;
  console.log("viewModel are", viewModel);
  const setColor = (value) => {
    let newColor = { ...props.selectedColor.getValue() };
    newColor.value = value;
    props.selectedColor.update(newColor);
  };

  return (
    <input
      type="color"
      value={props.selectedColor.value}
      onChange={(e) => setColor(e.target.value)}
    />
  );
};
