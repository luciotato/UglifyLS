#
# Generated Makefile - do not edit!
#
# Edit the Makefile in the project folder instead (../Makefile). Each target
# has a -pre and a -post target defined where you can add customized code.
#
# This makefile implements configuration specific macros and targets.


# Environment
MKDIR=mkdir
CP=cp
GREP=grep
NM=nm
CCADMIN=CCadmin
RANLIB=ranlib
CC=gcc
CCC=clang
CXX=clang
FC=gfortran
AS=as

# Macros
CND_PLATFORM=GNU-Linux-x86
CND_DLIB_EXT=so
CND_CONF=valgrind
CND_DISTDIR=dist
CND_BUILDDIR=build

# Include project Makefile
include Makefile

# Object Directory
OBJECTDIR=${CND_BUILDDIR}/${CND_CONF}/${CND_PLATFORM}

# Object Files
OBJECTFILES= \
	${OBJECTDIR}/core/ImmutArray.o \
	${OBJECTDIR}/core/LiteC-core.o \
	${OBJECTDIR}/core/PMREX-native.o \
	${OBJECTDIR}/core/any.o \
	${OBJECTDIR}/core/exceptions.o \
	${OBJECTDIR}/core/fs-native.o \
	${OBJECTDIR}/core/keytree.o \
	${OBJECTDIR}/core/simplemalloc.o \
	${OBJECTDIR}/core/utf8strings.o \
	${OBJECTDIR}/core/util.o \
	${OBJECTDIR}/generated-c/Test3.o \
	${OBJECTDIR}/generated-c/_dispatcher.o \
	${OBJECTDIR}/generated-c/interfaces/C_standalone/fs.o \
	${OBJECTDIR}/generated-c/interfaces/C_standalone/path.o \
	${OBJECTDIR}/generated-c/lib/AST.o \
	${OBJECTDIR}/generated-c/lib/ParserWithIterable.o \
	${OBJECTDIR}/generated-c/lib/TestOut.o \
	${OBJECTDIR}/generated-c/lib/Utils.o \
	${OBJECTDIR}/generated-c/lib/mkPath.o

# Test Directory
TESTDIR=${CND_BUILDDIR}/${CND_CONF}/${CND_PLATFORM}/tests

# Test Files
TESTFILES= \
	${TESTDIR}/TestFiles/f1

# C Compiler Flags
CFLAGS=-fmax-errors=10

# CC Compiler Flags
CCFLAGS=
CXXFLAGS=

# Fortran Compiler Flags
FFLAGS=

# Assembler Flags
ASFLAGS=

# Link Libraries and Options
LDLIBSOPTIONS=-lgc

# Build Targets
.build-conf: ${BUILD_SUBPROJECTS}
	"${MAKE}"  -f nbproject/Makefile-${CND_CONF}.mk ${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}/uglifyc

${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}/uglifyc: ${OBJECTFILES}
	${MKDIR} -p ${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}
	${LINK.c} -o ${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}/uglifyc ${OBJECTFILES} ${LDLIBSOPTIONS}

${OBJECTDIR}/core/ImmutArray.o: core/ImmutArray.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/ImmutArray.o core/ImmutArray.c

${OBJECTDIR}/core/LiteC-core.o: core/LiteC-core.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/LiteC-core.o core/LiteC-core.c

${OBJECTDIR}/core/PMREX-native.o: core/PMREX-native.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/PMREX-native.o core/PMREX-native.c

${OBJECTDIR}/core/any.o: core/any.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/any.o core/any.c

${OBJECTDIR}/core/exceptions.o: core/exceptions.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/exceptions.o core/exceptions.c

${OBJECTDIR}/core/fs-native.o: core/fs-native.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/fs-native.o core/fs-native.c

${OBJECTDIR}/core/keytree.o: core/keytree.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/keytree.o core/keytree.c

${OBJECTDIR}/core/simplemalloc.o: core/simplemalloc.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/simplemalloc.o core/simplemalloc.c

${OBJECTDIR}/core/utf8strings.o: core/utf8strings.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/utf8strings.o core/utf8strings.c

${OBJECTDIR}/core/util.o: core/util.c 
	${MKDIR} -p ${OBJECTDIR}/core
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/util.o core/util.c

${OBJECTDIR}/generated-c/Test3.o: generated-c/Test3.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/Test3.o generated-c/Test3.c

${OBJECTDIR}/generated-c/_dispatcher.o: generated-c/_dispatcher.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/_dispatcher.o generated-c/_dispatcher.c

${OBJECTDIR}/generated-c/interfaces/C_standalone/fs.o: generated-c/interfaces/C_standalone/fs.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/interfaces/C_standalone
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/interfaces/C_standalone/fs.o generated-c/interfaces/C_standalone/fs.c

${OBJECTDIR}/generated-c/interfaces/C_standalone/path.o: generated-c/interfaces/C_standalone/path.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/interfaces/C_standalone
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/interfaces/C_standalone/path.o generated-c/interfaces/C_standalone/path.c

${OBJECTDIR}/generated-c/lib/AST.o: generated-c/lib/AST.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/AST.o generated-c/lib/AST.c

${OBJECTDIR}/generated-c/lib/ParserWithIterable.o: generated-c/lib/ParserWithIterable.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/ParserWithIterable.o generated-c/lib/ParserWithIterable.c

${OBJECTDIR}/generated-c/lib/TestOut.o: generated-c/lib/TestOut.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/TestOut.o generated-c/lib/TestOut.c

${OBJECTDIR}/generated-c/lib/Utils.o: generated-c/lib/Utils.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/Utils.o generated-c/lib/Utils.c

${OBJECTDIR}/generated-c/lib/mkPath.o: generated-c/lib/mkPath.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/mkPath.o generated-c/lib/mkPath.c

# Subprojects
.build-subprojects:

# Build Test Targets
.build-tests-conf: .build-conf ${TESTFILES}
${TESTDIR}/TestFiles/f1: ${TESTDIR}/_ext/848821408/Strings.o ${OBJECTFILES:%.o=%_nomain.o}
	${MKDIR} -p ${TESTDIR}/TestFiles
	${LINK.c}   -o ${TESTDIR}/TestFiles/f1 $^ ${LDLIBSOPTIONS} 


${TESTDIR}/_ext/848821408/Strings.o: ../core/tests/Strings.c 
	${MKDIR} -p ${TESTDIR}/_ext/848821408
	${RM} "$@.d"
	$(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -I. -std=c99 -MMD -MP -MF "$@.d" -o ${TESTDIR}/_ext/848821408/Strings.o ../core/tests/Strings.c


${OBJECTDIR}/core/ImmutArray_nomain.o: ${OBJECTDIR}/core/ImmutArray.o core/ImmutArray.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/ImmutArray.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/ImmutArray_nomain.o core/ImmutArray.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/ImmutArray.o ${OBJECTDIR}/core/ImmutArray_nomain.o;\
	fi

${OBJECTDIR}/core/LiteC-core_nomain.o: ${OBJECTDIR}/core/LiteC-core.o core/LiteC-core.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/LiteC-core.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/LiteC-core_nomain.o core/LiteC-core.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/LiteC-core.o ${OBJECTDIR}/core/LiteC-core_nomain.o;\
	fi

${OBJECTDIR}/core/PMREX-native_nomain.o: ${OBJECTDIR}/core/PMREX-native.o core/PMREX-native.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/PMREX-native.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/PMREX-native_nomain.o core/PMREX-native.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/PMREX-native.o ${OBJECTDIR}/core/PMREX-native_nomain.o;\
	fi

${OBJECTDIR}/core/any_nomain.o: ${OBJECTDIR}/core/any.o core/any.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/any.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/any_nomain.o core/any.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/any.o ${OBJECTDIR}/core/any_nomain.o;\
	fi

${OBJECTDIR}/core/exceptions_nomain.o: ${OBJECTDIR}/core/exceptions.o core/exceptions.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/exceptions.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/exceptions_nomain.o core/exceptions.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/exceptions.o ${OBJECTDIR}/core/exceptions_nomain.o;\
	fi

${OBJECTDIR}/core/fs-native_nomain.o: ${OBJECTDIR}/core/fs-native.o core/fs-native.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/fs-native.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/fs-native_nomain.o core/fs-native.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/fs-native.o ${OBJECTDIR}/core/fs-native_nomain.o;\
	fi

${OBJECTDIR}/core/keytree_nomain.o: ${OBJECTDIR}/core/keytree.o core/keytree.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/keytree.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/keytree_nomain.o core/keytree.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/keytree.o ${OBJECTDIR}/core/keytree_nomain.o;\
	fi

${OBJECTDIR}/core/simplemalloc_nomain.o: ${OBJECTDIR}/core/simplemalloc.o core/simplemalloc.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/simplemalloc.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/simplemalloc_nomain.o core/simplemalloc.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/simplemalloc.o ${OBJECTDIR}/core/simplemalloc_nomain.o;\
	fi

${OBJECTDIR}/core/utf8strings_nomain.o: ${OBJECTDIR}/core/utf8strings.o core/utf8strings.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/utf8strings.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/utf8strings_nomain.o core/utf8strings.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/utf8strings.o ${OBJECTDIR}/core/utf8strings_nomain.o;\
	fi

${OBJECTDIR}/core/util_nomain.o: ${OBJECTDIR}/core/util.o core/util.c 
	${MKDIR} -p ${OBJECTDIR}/core
	@NMOUTPUT=`${NM} ${OBJECTDIR}/core/util.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/core/util_nomain.o core/util.c;\
	else  \
	    ${CP} ${OBJECTDIR}/core/util.o ${OBJECTDIR}/core/util_nomain.o;\
	fi

${OBJECTDIR}/generated-c/Test3_nomain.o: ${OBJECTDIR}/generated-c/Test3.o generated-c/Test3.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c
	@NMOUTPUT=`${NM} ${OBJECTDIR}/generated-c/Test3.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/Test3_nomain.o generated-c/Test3.c;\
	else  \
	    ${CP} ${OBJECTDIR}/generated-c/Test3.o ${OBJECTDIR}/generated-c/Test3_nomain.o;\
	fi

${OBJECTDIR}/generated-c/_dispatcher_nomain.o: ${OBJECTDIR}/generated-c/_dispatcher.o generated-c/_dispatcher.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c
	@NMOUTPUT=`${NM} ${OBJECTDIR}/generated-c/_dispatcher.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/_dispatcher_nomain.o generated-c/_dispatcher.c;\
	else  \
	    ${CP} ${OBJECTDIR}/generated-c/_dispatcher.o ${OBJECTDIR}/generated-c/_dispatcher_nomain.o;\
	fi

${OBJECTDIR}/generated-c/interfaces/C_standalone/fs_nomain.o: ${OBJECTDIR}/generated-c/interfaces/C_standalone/fs.o generated-c/interfaces/C_standalone/fs.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/interfaces/C_standalone
	@NMOUTPUT=`${NM} ${OBJECTDIR}/generated-c/interfaces/C_standalone/fs.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/interfaces/C_standalone/fs_nomain.o generated-c/interfaces/C_standalone/fs.c;\
	else  \
	    ${CP} ${OBJECTDIR}/generated-c/interfaces/C_standalone/fs.o ${OBJECTDIR}/generated-c/interfaces/C_standalone/fs_nomain.o;\
	fi

${OBJECTDIR}/generated-c/interfaces/C_standalone/path_nomain.o: ${OBJECTDIR}/generated-c/interfaces/C_standalone/path.o generated-c/interfaces/C_standalone/path.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/interfaces/C_standalone
	@NMOUTPUT=`${NM} ${OBJECTDIR}/generated-c/interfaces/C_standalone/path.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/interfaces/C_standalone/path_nomain.o generated-c/interfaces/C_standalone/path.c;\
	else  \
	    ${CP} ${OBJECTDIR}/generated-c/interfaces/C_standalone/path.o ${OBJECTDIR}/generated-c/interfaces/C_standalone/path_nomain.o;\
	fi

${OBJECTDIR}/generated-c/lib/AST_nomain.o: ${OBJECTDIR}/generated-c/lib/AST.o generated-c/lib/AST.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	@NMOUTPUT=`${NM} ${OBJECTDIR}/generated-c/lib/AST.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/AST_nomain.o generated-c/lib/AST.c;\
	else  \
	    ${CP} ${OBJECTDIR}/generated-c/lib/AST.o ${OBJECTDIR}/generated-c/lib/AST_nomain.o;\
	fi

${OBJECTDIR}/generated-c/lib/ParserWithIterable_nomain.o: ${OBJECTDIR}/generated-c/lib/ParserWithIterable.o generated-c/lib/ParserWithIterable.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	@NMOUTPUT=`${NM} ${OBJECTDIR}/generated-c/lib/ParserWithIterable.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/ParserWithIterable_nomain.o generated-c/lib/ParserWithIterable.c;\
	else  \
	    ${CP} ${OBJECTDIR}/generated-c/lib/ParserWithIterable.o ${OBJECTDIR}/generated-c/lib/ParserWithIterable_nomain.o;\
	fi

${OBJECTDIR}/generated-c/lib/TestOut_nomain.o: ${OBJECTDIR}/generated-c/lib/TestOut.o generated-c/lib/TestOut.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	@NMOUTPUT=`${NM} ${OBJECTDIR}/generated-c/lib/TestOut.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/TestOut_nomain.o generated-c/lib/TestOut.c;\
	else  \
	    ${CP} ${OBJECTDIR}/generated-c/lib/TestOut.o ${OBJECTDIR}/generated-c/lib/TestOut_nomain.o;\
	fi

${OBJECTDIR}/generated-c/lib/Utils_nomain.o: ${OBJECTDIR}/generated-c/lib/Utils.o generated-c/lib/Utils.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	@NMOUTPUT=`${NM} ${OBJECTDIR}/generated-c/lib/Utils.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/Utils_nomain.o generated-c/lib/Utils.c;\
	else  \
	    ${CP} ${OBJECTDIR}/generated-c/lib/Utils.o ${OBJECTDIR}/generated-c/lib/Utils_nomain.o;\
	fi

${OBJECTDIR}/generated-c/lib/mkPath_nomain.o: ${OBJECTDIR}/generated-c/lib/mkPath.o generated-c/lib/mkPath.c 
	${MKDIR} -p ${OBJECTDIR}/generated-c/lib
	@NMOUTPUT=`${NM} ${OBJECTDIR}/generated-c/lib/mkPath.o`; \
	if (echo "$$NMOUTPUT" | ${GREP} '|main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T main$$') || \
	   (echo "$$NMOUTPUT" | ${GREP} 'T _main$$'); \
	then  \
	    ${RM} "$@.d";\
	    $(COMPILE.c) -g -DFLATTEN_ALL -DNDEBUG -DNO_GC -I../core -Igenerated-c/interfaces -Igenerated-c/interfaces/C_standalone -std=c99 -Dmain=__nomain -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/generated-c/lib/mkPath_nomain.o generated-c/lib/mkPath.c;\
	else  \
	    ${CP} ${OBJECTDIR}/generated-c/lib/mkPath.o ${OBJECTDIR}/generated-c/lib/mkPath_nomain.o;\
	fi

# Run Test Targets
.test-conf:
	@if [ "${TEST}" = "" ]; \
	then  \
	    ${TESTDIR}/TestFiles/f1 || true; \
	else  \
	    ./${TEST} || true; \
	fi

# Clean Targets
.clean-conf: ${CLEAN_SUBPROJECTS}
	${RM} -r ${CND_BUILDDIR}/${CND_CONF}
	${RM} ${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}/uglifyc

# Subprojects
.clean-subprojects:

# Enable dependency checking
.dep.inc: .depcheck-impl

include .dep.inc
