import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const toolbarButtons = {display: "flex", gap: "4px"};
const storyTitle = {color: "#818cf8", fontSize: "16px", margin: "0"};
const storyHeader = {display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px"};
const sourceToggle = {marginTop: "16px"};
const sourceSummary = {fontSize: "12px", color: "#64748b", cursor: "pointer", marginBottom: "8px"};
const sourceCode = {fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "14px", lineHeight: "1.6", color: "#cbd5e1"};
const sourceBlock = {backgroundColor: "#020617", border: "1px solid #334155", borderRadius: "6px", padding: "16px", overflow: "auto", margin: "0"};
const sidebarNav = {width: "256px", borderRight: "1px solid #334155", display: "flex", flexDirection: "column", flexShrink: "0"};
const sidebarHeading = {fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748b", padding: "0 16px", marginBottom: "8px"};
const sidebarContent = {flex: "1", overflowY: "auto", padding: "12px 0"};
const sidebarBranding = {padding: "8px 16px", fontSize: "11px", color: "#475569", borderTop: "1px solid #334155"};
const searchBox = {padding: "8px 12px", borderBottom: "1px solid #334155"};
const row = {display: "flex", flex: "1"};
const root = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontFamily: "system-ui, -apple-system, sans-serif",
  backgroundColor: "#0f172a",
  color: "#e2e8f0",
  margin: "0"
};
const panel = {flex: "1", overflowY: "auto", padding: "24px"};
const muted = {color: "#64748b"};
const moduleLabel = {padding: "4px 16px", fontSize: "12px", fontWeight: "600", color: "#818cf8", marginTop: "8px"};
const layoutToggle = {
  border: "1px solid #334155",
  borderRadius: "4px",
  background: "#1e293b",
  color: "#94a3b8",
  padding: "4px 8px",
  cursor: "pointer",
  fontSize: "14px",
  fontFamily: "inherit"
};
const flex1 = {flex: "1"};
const exportButton = isSelected => (
  {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "6px 24px",
    fontSize: "12px",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: isSelected ? "#ffffff" : "#94a3b8",
    backgroundColor: isSelected ? "#1e293b" : "transparent"
  }
);
const center = {display: "flex", alignItems: "center", justifyContent: "center"};
const panelPlaceholder = /* #__PURE__ */ Yoga$dReact$dDOM$dInternal.mergeStyles([/* #__PURE__ */ Yoga$dReact$dDOM$dInternal.mergeStyles([muted, center]), flex1]);
export {
  center,
  exportButton,
  flex1,
  layoutToggle,
  moduleLabel,
  muted,
  panel,
  panelPlaceholder,
  root,
  row,
  searchBox,
  sidebarBranding,
  sidebarContent,
  sidebarHeading,
  sidebarNav,
  sourceBlock,
  sourceCode,
  sourceSummary,
  sourceToggle,
  storyHeader,
  storyTitle,
  toolbarButtons
};
