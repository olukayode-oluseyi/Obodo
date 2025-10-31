import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import React, { forwardRef, useCallback } from "react";

interface BottomSheetProps {
  children: React.ReactNode;
}

export type BottomSheetRef = BottomSheet;

const BottomSheetWrapper = forwardRef<BottomSheetRef, BottomSheetProps>(
  ({ children }, ref) => {
    const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
      return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />;
    }, []);

    return (
      <Portal>
        <BottomSheet
          handleComponent={() => null}
          ref={ref}
          backgroundStyle={{
            backgroundColor: "transparent",
          }}
          index={-1}
          enableDynamicSizing={true}
          backdropComponent={renderBackdrop}
          style={
            {
              // backgroundColor: 'red',
            }
          }
        >
          <BottomSheetView
            style={{ backgroundColor: "", margin: 12,  }}
          >
            {children}
          </BottomSheetView>
        </BottomSheet>
      </Portal>
    );
  }
);

export default BottomSheetWrapper;
