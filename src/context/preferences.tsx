// import { ReactNode, useState } from "react"

// const NavigationBarTitleKey = createPreferenceKey({
//     defaultValue: "",
//     reduce(value: string, next: () => string) {
//         return next()
//     }
// })

// function NavigationBarTitle({ title, children }: { title: string; children: ReactNode }) {
//     return <NavigationBarTitleKey.Provider value={title}>{children}</NavigationBarTitleKey.Provider>
// }

// function NavigationView({ children }: { children: ReactNode }) {
//     // let title = usePreference(NavigationBarTitleKey)
//     // onPreferenceChange(NavigationBarTitleKey, title => console.log(title))

//     return (
//         <div>
//             <NavigationBarTitleKey.Consumer>
//                 {title => <h1>{title}</h1>}
//             </NavigationBarTitleKey.Consumer>
//             {children}
//         </div>
//     )
// }

// function Content() {
//     let messages = useState<string[]>([])

//     return (
//         <NavigationView>
//             <NavigationBarTitle title="Messages">
//                 <List each={messages}>{message => <Text>{message}</Text>}</List>
//             </NavigationBarTitle>
//         </NavigationView>
//     )
// }
