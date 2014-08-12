FILE=$1
DBRK="$3"

#lite -v 2 Test
echo $FILE

if [ "$FILE" = "Test3.lite.md" ]; then
    #compile-to-c
    node $DBRK /home/ltato/LiteScript/devel/generated-js/v0.8/lite-to-c/js_lite -v 2 $FILE -o /home/ltato/LiteScript/devel/litec/UglifyC/generated-c
else
    #compile-to-js
    #node $DBRK /home/ltato/LiteScript/lib/lite -v 1 $FILE
    echo "open build-1..3 and compile from there"
fi 
