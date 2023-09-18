// Components:
// alert
// badge
// confirmationDialog
// contextMenu
// controlSize
// focused
// itemProvider (dnd)
// popover
// sheet
// submitScope
// toolbar

// Routing?
// navigationDestination

// Effects:
// accentColor
// blur
// border
// buttonBorderShape
// clipShape
// clipped
// cornerRadius
// foregroundColor
// mask
// opacity
// shadow

// Layout:
// alignmentGuide
// aspectRatio
// background
// gridCellColumns
// gridColumnAlignment
// hidden
// overlay
// padding
// presentationDetents
// zIndex

// Do these with some CSS?
// [data-bold]
// [data-font-sans]
// [data-line-limit="2"]
// var(--kerning);

// Then we put these props on every Pineapple component:
// { bold: boolean } &
// { font: "sans" | "serif" } &
// { lineLimit: number } &
// { kerning: number }

// And have some utility function to convert between the two:
// function Comp({ special, prop, ...props }) {
//      let dataset = convertStyleProps(props) // e.g. ["data-bold", "data-font-sans"]
//      return <div className={cx(special, prop)} {...dataset} />
// }

// Text:
// bold
// font
// fontWeight
// italic
// kerning
// lineLimit
// lineSpacing
// monospaced
// multilineTextAlignment
// searchable
// searchScopes
// searchSuggestions
// strikethrough
// submitLabel
// textCase
// textSelection
// tracking
// truncationMode
// underline

// Image:
//

// List:
// deleteDisabled
// listItemTint
// listRowBackground
// listRowInsets
// listRowSeparator
// listSectionSeparator
// listSectionSeparatorTint
// moveDisabled
// swipeActions

// NavigationBar:
// navigationTitle

// Style:
// backgroundStyle
// buttonStyle
// controlGroupStyle
// datePickerStyle
// disclosureGroupStyle
// formStyle
// gaugeStyle
// groupBoxStyle
// indexViewStyle
// labelStyle
// listStyle
// menuStyle
// navigationSplitViewStyle
// pickerStyle
// progressViewStyle
// tabViewStyle
// tableStyle
// textFieldStyle
// toggleStyle

// Events:
// copyable
// cuttable
// pastable
// draggable
// dropDestination
// fileExporter
// fileImporter
// onAppear
// onChange
// onContinuousHover
// onCopy
// onCut
// onPaste
// onDelete
// onDisappear
// onDrag
// onDrop
// onHover
// onInsert
// onMove
// onReceive
// refreshable
// task

// Gestures:
// gesture
// onLongPressGesture
// onLongTouchGesture
// onTapGesture

// Shapes:
// fill
// rotation
// scale
// size
// stroke
// strokeBorder

// Other:
// animation
// defaultAppStorage
// disabled
// focusable
// keyboardShortcut
// privacySensitive
// redacted
// scrollDisabled
// tint
// unredacted

// Property wrappers:
// @AppStorage / @SceneStorage
// @Binding / @Bindable
// @FetchRequest
// @FocusedValue / @FocusedBinding
// @Observable
