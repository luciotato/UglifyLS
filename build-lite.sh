FILE=$1
DBRK="$3"

#lite -v 2 Test
echo $FILE

if [ "$FILE" = "Test3.lite.md" ]; then
    #compile-to-c
    node $DBRK ~/LiteScript/devel/generated-js/v0.8/lite-to-c/js_lite -v 2 $FILE -o UglifyC/generated-c
    #litecc -v 3 $FILE -o /home/ltato/LiteScript/devel/litec/UglifyC/generated-c

elif [ "$FILE" = "Test2.lite.md" ]; then
    #compile-to-js
    node $DBRK ~/LiteScript/lib/lite -v 1 $FILE
else
    echo "open Test2 or Test3 and compile from there"
fi 
