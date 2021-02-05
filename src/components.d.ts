/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface ClickOutside {
    }
    interface DemoViewer {
        "url"?: string;
    }
    interface HomePage {
    }
    interface PatternList {
    }
    interface PatternPage {
        "pattern"?: string;
    }
    interface ToolTip {
        "position": string;
        "tip"?: string;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLClickOutsideElement extends Components.ClickOutside, HTMLStencilElement {
    }
    var HTMLClickOutsideElement: {
        prototype: HTMLClickOutsideElement;
        new (): HTMLClickOutsideElement;
    };
    interface HTMLDemoViewerElement extends Components.DemoViewer, HTMLStencilElement {
    }
    var HTMLDemoViewerElement: {
        prototype: HTMLDemoViewerElement;
        new (): HTMLDemoViewerElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLPatternListElement extends Components.PatternList, HTMLStencilElement {
    }
    var HTMLPatternListElement: {
        prototype: HTMLPatternListElement;
        new (): HTMLPatternListElement;
    };
    interface HTMLPatternPageElement extends Components.PatternPage, HTMLStencilElement {
    }
    var HTMLPatternPageElement: {
        prototype: HTMLPatternPageElement;
        new (): HTMLPatternPageElement;
    };
    interface HTMLToolTipElement extends Components.ToolTip, HTMLStencilElement {
    }
    var HTMLToolTipElement: {
        prototype: HTMLToolTipElement;
        new (): HTMLToolTipElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "click-outside": HTMLClickOutsideElement;
        "demo-viewer": HTMLDemoViewerElement;
        "home-page": HTMLHomePageElement;
        "pattern-list": HTMLPatternListElement;
        "pattern-page": HTMLPatternPageElement;
        "tool-tip": HTMLToolTipElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface ClickOutside {
        "onClickOutSide"?: (event: CustomEvent<any>) => void;
    }
    interface DemoViewer {
        "url"?: string;
    }
    interface HomePage {
    }
    interface PatternList {
    }
    interface PatternPage {
        "pattern"?: string;
    }
    interface ToolTip {
        "position"?: string;
        "tip"?: string;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "click-outside": ClickOutside;
        "demo-viewer": DemoViewer;
        "home-page": HomePage;
        "pattern-list": PatternList;
        "pattern-page": PatternPage;
        "tool-tip": ToolTip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "click-outside": LocalJSX.ClickOutside & JSXBase.HTMLAttributes<HTMLClickOutsideElement>;
            "demo-viewer": LocalJSX.DemoViewer & JSXBase.HTMLAttributes<HTMLDemoViewerElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "pattern-list": LocalJSX.PatternList & JSXBase.HTMLAttributes<HTMLPatternListElement>;
            "pattern-page": LocalJSX.PatternPage & JSXBase.HTMLAttributes<HTMLPatternPageElement>;
            "tool-tip": LocalJSX.ToolTip & JSXBase.HTMLAttributes<HTMLToolTipElement>;
        }
    }
}
