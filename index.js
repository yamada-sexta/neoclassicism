(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/gl-matrix/esm/common.js
  var EPSILON = 1e-6;
  var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
  var RANDOM = Math.random;
  var degree = Math.PI / 180;
  if (!Math.hypot)
    Math.hypot = function() {
      var y = 0, i = arguments.length;
      while (i--) {
        y += arguments[i] * arguments[i];
      }
      return Math.sqrt(y);
    };

  // node_modules/gl-matrix/esm/mat4.js
  var mat4_exports = {};
  __export(mat4_exports, {
    add: () => add,
    adjoint: () => adjoint,
    clone: () => clone,
    copy: () => copy,
    create: () => create,
    determinant: () => determinant,
    equals: () => equals,
    exactEquals: () => exactEquals,
    frob: () => frob,
    fromQuat: () => fromQuat,
    fromQuat2: () => fromQuat2,
    fromRotation: () => fromRotation,
    fromRotationTranslation: () => fromRotationTranslation,
    fromRotationTranslationScale: () => fromRotationTranslationScale,
    fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
    fromScaling: () => fromScaling,
    fromTranslation: () => fromTranslation,
    fromValues: () => fromValues,
    fromXRotation: () => fromXRotation,
    fromYRotation: () => fromYRotation,
    fromZRotation: () => fromZRotation,
    frustum: () => frustum,
    getRotation: () => getRotation,
    getScaling: () => getScaling,
    getTranslation: () => getTranslation,
    identity: () => identity,
    invert: () => invert,
    lookAt: () => lookAt,
    mul: () => mul,
    multiply: () => multiply,
    multiplyScalar: () => multiplyScalar,
    multiplyScalarAndAdd: () => multiplyScalarAndAdd,
    ortho: () => ortho,
    orthoNO: () => orthoNO,
    orthoZO: () => orthoZO,
    perspective: () => perspective,
    perspectiveFromFieldOfView: () => perspectiveFromFieldOfView,
    perspectiveNO: () => perspectiveNO,
    perspectiveZO: () => perspectiveZO,
    rotate: () => rotate,
    rotateX: () => rotateX,
    rotateY: () => rotateY,
    rotateZ: () => rotateZ,
    scale: () => scale,
    set: () => set,
    str: () => str,
    sub: () => sub,
    subtract: () => subtract,
    targetTo: () => targetTo,
    translate: () => translate,
    transpose: () => transpose
  });
  function create() {
    var out = new ARRAY_TYPE(16);
    if (ARRAY_TYPE != Float32Array) {
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
    }
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
  }
  function clone(a) {
    var out = new ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function transpose(out, a) {
    if (out === a) {
      var a01 = a[1], a02 = a[2], a03 = a[3];
      var a12 = a[6], a13 = a[7];
      var a23 = a[11];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a01;
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a02;
      out[9] = a12;
      out[11] = a[14];
      out[12] = a03;
      out[13] = a13;
      out[14] = a23;
    } else {
      out[0] = a[0];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a[1];
      out[5] = a[5];
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a[2];
      out[9] = a[6];
      out[10] = a[10];
      out[11] = a[14];
      out[12] = a[3];
      out[13] = a[7];
      out[14] = a[11];
      out[15] = a[15];
    }
    return out;
  }
  function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
      return null;
    }
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
  }
  function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
  }
  function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }
  function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === out) {
      out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
      out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
      out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
      out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
      out[12] = a00 * x + a10 * y + a20 * z + a[12];
      out[13] = a01 * x + a11 * y + a21 * z + a[13];
      out[14] = a02 * x + a12 * y + a22 * z + a[14];
      out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
  }
  function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len2 = Math.hypot(x, y, z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len2 < EPSILON) {
      return null;
    }
    len2 = 1 / len2;
    x *= len2;
    y *= len2;
    z *= len2;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    return out;
  }
  function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
  }
  function rotateY(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
  }
  function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    if (a !== out) {
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
  }
  function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromRotation(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len2 = Math.hypot(x, y, z);
    var s, c, t;
    if (len2 < EPSILON) {
      return null;
    }
    len2 = 1 / len2;
    x *= len2;
    y *= len2;
    z *= len2;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromRotationTranslation(out, q, v) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromQuat2(out, a) {
    var translation = new ARRAY_TYPE(3);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw;
    if (magnitude > 0) {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    fromRotationTranslation(out, a, translation);
    return out;
  }
  function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
  }
  function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
  }
  function getRotation(out, mat) {
    var scaling = new ARRAY_TYPE(3);
    getScaling(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }
    return out;
  }
  function fromRotationTranslationScale(out, q, v, s) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
  }
  function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
  }
  function perspectiveNO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = (far + near) * nf;
      out[14] = 2 * far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -2 * near;
    }
    return out;
  }
  var perspective = perspectiveNO;
  function perspectiveZO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = far * nf;
      out[14] = far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -near;
    }
    return out;
  }
  function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
    var xScale = 2 / (leftTan + rightTan);
    var yScale = 2 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = yScale;
    out[6] = 0;
    out[7] = 0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near / (near - far);
    out[15] = 0;
    return out;
  }
  function orthoNO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
  }
  var ortho = orthoNO;
  function orthoZO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
  }
  function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len2;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
      return identity(out);
    }
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len2 = 1 / Math.hypot(z0, z1, z2);
    z0 *= len2;
    z1 *= len2;
    z2 *= len2;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len2 = Math.hypot(x0, x1, x2);
    if (!len2) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len2 = 1 / len2;
      x0 *= len2;
      x1 *= len2;
      x2 *= len2;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len2 = Math.hypot(y0, y1, y2);
    if (!len2) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len2 = 1 / len2;
      y0 *= len2;
      y1 *= len2;
      y2 *= len2;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
  }
  function targetTo(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len2 = z0 * z0 + z1 * z1 + z2 * z2;
    if (len2 > 0) {
      len2 = 1 / Math.sqrt(len2);
      z0 *= len2;
      z1 *= len2;
      z2 *= len2;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len2 = x0 * x0 + x1 * x1 + x2 * x2;
    if (len2 > 0) {
      len2 = 1 / Math.sqrt(len2);
      x0 *= len2;
      x1 *= len2;
      x2 *= len2;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
  }
  function str(a) {
    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
  }
  function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
  }
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
  }
  function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
  }
  function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
  }
  function multiplyScalarAndAdd(out, a, b, scale3) {
    out[0] = a[0] + b[0] * scale3;
    out[1] = a[1] + b[1] * scale3;
    out[2] = a[2] + b[2] * scale3;
    out[3] = a[3] + b[3] * scale3;
    out[4] = a[4] + b[4] * scale3;
    out[5] = a[5] + b[5] * scale3;
    out[6] = a[6] + b[6] * scale3;
    out[7] = a[7] + b[7] * scale3;
    out[8] = a[8] + b[8] * scale3;
    out[9] = a[9] + b[9] * scale3;
    out[10] = a[10] + b[10] * scale3;
    out[11] = a[11] + b[11] * scale3;
    out[12] = a[12] + b[12] * scale3;
    out[13] = a[13] + b[13] * scale3;
    out[14] = a[14] + b[14] * scale3;
    out[15] = a[15] + b[15] * scale3;
    return out;
  }
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
  }
  function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
    var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
  }
  var mul = multiply;
  var sub = subtract;

  // node_modules/gl-matrix/esm/vec3.js
  var vec3_exports = {};
  __export(vec3_exports, {
    add: () => add2,
    angle: () => angle,
    bezier: () => bezier,
    ceil: () => ceil,
    clone: () => clone2,
    copy: () => copy2,
    create: () => create2,
    cross: () => cross,
    dist: () => dist,
    distance: () => distance,
    div: () => div,
    divide: () => divide,
    dot: () => dot,
    equals: () => equals2,
    exactEquals: () => exactEquals2,
    floor: () => floor,
    forEach: () => forEach,
    fromValues: () => fromValues2,
    hermite: () => hermite,
    inverse: () => inverse,
    len: () => len,
    length: () => length,
    lerp: () => lerp,
    max: () => max,
    min: () => min,
    mul: () => mul2,
    multiply: () => multiply2,
    negate: () => negate,
    normalize: () => normalize,
    random: () => random,
    rotateX: () => rotateX2,
    rotateY: () => rotateY2,
    rotateZ: () => rotateZ2,
    round: () => round,
    scale: () => scale2,
    scaleAndAdd: () => scaleAndAdd,
    set: () => set2,
    sqrDist: () => sqrDist,
    sqrLen: () => sqrLen,
    squaredDistance: () => squaredDistance,
    squaredLength: () => squaredLength,
    str: () => str2,
    sub: () => sub2,
    subtract: () => subtract2,
    transformMat3: () => transformMat3,
    transformMat4: () => transformMat4,
    transformQuat: () => transformQuat,
    zero: () => zero
  });
  function create2() {
    var out = new ARRAY_TYPE(3);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }
    return out;
  }
  function clone2(a) {
    var out = new ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.hypot(x, y, z);
  }
  function fromValues2(x, y, z) {
    var out = new ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  function copy2(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  function set2(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  function add2(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
  }
  function subtract2(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
  }
  function multiply2(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
  }
  function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
  }
  function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
  }
  function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
  }
  function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
  }
  function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
  }
  function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
  }
  function scale2(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
  }
  function scaleAndAdd(out, a, b, scale3) {
    out[0] = a[0] + b[0] * scale3;
    out[1] = a[1] + b[1] * scale3;
    out[2] = a[2] + b[2] * scale3;
    return out;
  }
  function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.hypot(x, y, z);
  }
  function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
  }
  function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
  }
  function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }
  function inverse(out, a) {
    out[0] = 1 / a[0];
    out[1] = 1 / a[1];
    out[2] = 1 / a[2];
    return out;
  }
  function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len2 = x * x + y * y + z * z;
    if (len2 > 0) {
      len2 = 1 / Math.sqrt(len2);
    }
    out[0] = a[0] * len2;
    out[1] = a[1] * len2;
    out[2] = a[2] * len2;
    return out;
  }
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }
  function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
  }
  function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  function random(out, scale3) {
    scale3 = scale3 || 1;
    var r = RANDOM() * 2 * Math.PI;
    var z = RANDOM() * 2 - 1;
    var zScale = Math.sqrt(1 - z * z) * scale3;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale3;
    return out;
  }
  function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
  }
  function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
  }
  function transformQuat(out, a, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a[0], y = a[1], z = a[2];
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
  }
  function rotateX2(out, a, b, rad) {
    var p = [], r = [];
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  function rotateY2(out, a, b, rad) {
    var p = [], r = [];
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  function rotateZ2(out, a, b, rad) {
    var p = [], r = [];
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2];
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  function angle(a, b) {
    var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
  }
  function zero(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
  }
  function str2(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
  }
  function exactEquals2(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
  }
  function equals2(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
  }
  var sub2 = subtract2;
  var mul2 = multiply2;
  var div = divide;
  var dist = distance;
  var sqrDist = squaredDistance;
  var len = length;
  var sqrLen = squaredLength;
  var forEach = function() {
    var vec = create2();
    return function(a, stride, offset, count, fn, arg) {
      var i, l;
      if (!stride) {
        stride = 3;
      }
      if (!offset) {
        offset = 0;
      }
      if (count) {
        l = Math.min(count * stride + offset, a.length);
      } else {
        l = a.length;
      }
      for (i = offset; i < l; i += stride) {
        vec[0] = a[i];
        vec[1] = a[i + 1];
        vec[2] = a[i + 2];
        fn(vec, vec, arg);
        a[i] = vec[0];
        a[i + 1] = vec[1];
        a[i + 2] = vec[2];
      }
      return a;
    };
  }();

  // Scripts/Consts.ts
  var mainCanvas = document.getElementById("mainCanvas");
  var mainCtx = mainCanvas.getContext("2d");
  var height = 500;
  var width = 500;
  mainCanvas.height = height;
  mainCanvas.width = width;
  var aspectRatio = height / width;
  var scoreText = createText("score", "Score: 0");
  var slider1 = createSliders("1");
  var targetX = createSliders("targetX", 0);
  var targetY = createSliders("targetY", 0);
  var targetZ = createSliders("targetZ");
  var eyeX = createSliders("eyeX", 180);
  var eyeY = createSliders("eyeY", 128);
  var eyeZ = createSliders("eyeZ", -124);
  var upX = createSliders("upX", 0);
  var upY = createSliders("upY", 1);
  var upZ = createSliders("upZ", 0);
  var worldX = createSliders("worldX");
  var worldY = createSliders("worldY", -25);
  function createSliders(id, defaultVal = 0, min2 = -200, max2 = 200) {
    let slider = document.createElement("input");
    slider.type = "range";
    slider.min = min2.toString();
    slider.max = max2.toString();
    slider.value = defaultVal.toString();
    slider.id = id;
    slider.onchange = () => {
      console.log(`slider ${id} changed to ${slider.value}`);
    };
    let sliderLabel = document.createElement("label");
    sliderLabel.htmlFor = id;
    sliderLabel.innerText = id;
    let sliderDiv = document.createElement("div");
    sliderDiv.appendChild(sliderLabel);
    sliderDiv.appendChild(slider);
    document.body.appendChild(sliderDiv);
    return slider;
  }
  function createText(id, text) {
    let textDiv = document.createElement("div");
    textDiv.id = id;
    textDiv.innerText = text;
    document.body.appendChild(textDiv);
    return textDiv;
  }

  // Scripts/Drawer.ts
  function lineToTx(loc, Tx, context) {
    let res = vec3_exports.create();
    vec3_exports.transformMat4(res, loc, Tx);
    context.lineTo(res[0], res[1]);
  }
  function moveToTx(loc, Tx, context) {
    let res = vec3_exports.create();
    vec3_exports.transformMat4(res, loc, Tx);
    context.moveTo(res[0], res[1]);
  }
  function drawLine3D(start, end, transformMatrix) {
    mainCtx.beginPath();
    moveToTx(start, transformMatrix, mainCtx);
    lineToTx(end, transformMatrix, mainCtx);
    mainCtx.stroke();
  }
  function drawTriangle3D(p1, p2, p3, transformMatrix) {
    mainCtx.beginPath();
    moveToTx(p1, transformMatrix, mainCtx);
    lineToTx(p2, transformMatrix, mainCtx);
    lineToTx(p3, transformMatrix, mainCtx);
    lineToTx(p1, transformMatrix, mainCtx);
    mainCtx.fill();
    mainCtx.stroke();
  }
  function drawBackground(color = "white") {
    mainCtx.fillStyle = color;
    mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
  }
  function drawPlane3D(p1, p2, p3, p4, transformMatrix) {
    mainCtx.beginPath();
    moveToTx(p1, transformMatrix, mainCtx);
    lineToTx(p2, transformMatrix, mainCtx);
    lineToTx(p3, transformMatrix, mainCtx);
    lineToTx(p4, transformMatrix, mainCtx);
    lineToTx(p1, transformMatrix, mainCtx);
    mainCtx.fill();
    mainCtx.stroke();
  }

  // Scripts/Object3Ds/Camera3D.ts
  var Camera3D = class {
    constructor() {
      this.moveEye = (offset) => {
        this.eye[0] = this.inLimit(offset[0]) ? this.eye[0] + -offset[0] / 10 : this.eye[0];
        this.eye[1] = this.inLimit(offset[1]) ? this.eye[1] + -offset[1] / 10 : this.eye[1];
        mat4_exports.lookAt(this.transformMatrix, this.eye, this.target, this.up);
      };
      this.transformMatrix = mat4_exports.create();
      this.eye = vec3_exports.fromValues(0, 0, 0);
      this.target = vec3_exports.fromValues(0, 0, 0);
      this.up = vec3_exports.fromValues(0, 1, 0);
      mat4_exports.lookAt(this.transformMatrix, this.eye, this.target, this.up);
    }
    setEye(eye) {
      this.eye = eye;
      this.updateTransformMatrix();
    }
    setTarget(target) {
      this.target = target;
      this.updateTransformMatrix();
    }
    setUp(up) {
      this.up = up;
      this.updateTransformMatrix();
    }
    updateTransformMatrix() {
      mat4_exports.lookAt(this.transformMatrix, this.eye, this.target, this.up);
    }
    transformTo(t) {
      this.transformMatrix = mat4_exports.create();
      mat4_exports.lookAt(this.transformMatrix, this.eye, this.target, this.up);
      mat4_exports.multiply(this.transformMatrix, t, this.transformMatrix);
      return this.transformMatrix;
    }
    inLimit(val) {
      return true;
    }
    get direction() {
      let raw = vec3_exports.create();
      vec3_exports.sub(raw, this.target, this.eye);
      return vec3_exports.normalize(raw, raw);
    }
    get position() {
      return this.eye;
    }
  };

  // Scripts/Object3Ds/World3D.ts
  var World3D = class {
    constructor(scale3 = 10) {
      this._transformMatrix = mat4_exports.create();
      this._scale = scale3;
      let m = mat4_exports.create();
      mat4_exports.scale(m, m, [scale3, scale3, scale3]);
      this._transformMatrix = m;
    }
    get transformMatrix() {
      return this._transformMatrix;
    }
    transformTo(t) {
      let m = this.transformMatrix;
      mat4_exports.multiply(m, t, m);
      this._transformMatrix = m;
      return m;
    }
    transformPoint(p) {
      let m = this.transformMatrix;
      let v = vec3_exports.create();
      vec3_exports.transformMat4(v, p, m);
      return v;
    }
    move(x, y, z) {
      let m = mat4_exports.create();
      mat4_exports.translate(m, m, [x, y, z]);
      return this.transformTo(m);
    }
    scale(val) {
      let m = mat4_exports.create();
      mat4_exports.scale(m, m, [val, val, val]);
      return this.transformTo(m);
    }
  };

  // Scripts/Math/Math3D.ts
  function getNormal(p1, p2, p3) {
    let v1 = vec3_exports.create();
    let v2 = vec3_exports.create();
    let normal = vec3_exports.create();
    vec3_exports.subtract(v1, p2, p1);
    vec3_exports.subtract(v2, p3, p1);
    vec3_exports.cross(normal, v1, v2);
    vec3_exports.normalize(normal, normal);
    return normal;
  }
  function getCenter(points) {
    let center = vec3_exports.create();
    for (let i = 0; i < points.length; i++) {
      vec3_exports.add(center, center, points[i]);
    }
    vec3_exports.scale(center, center, 1 / points.length);
    return center;
  }

  // Scripts/Object3Ds/TriangularPrism.ts
  var TriangularPrism = class {
    constructor(p1, p2, p3, p4) {
      this.points = [];
      this.scale = 1;
      this.rotation = 0;
      this.rotationAxis = vec3_exports.fromValues(0, 1, 0);
      this.points = [p1, p2, p3, p4];
    }
    get p1() {
      return this.points[0];
    }
    get p2() {
      return this.points[1];
    }
    get p3() {
      return this.points[2];
    }
    get p4() {
      return this.points[3];
    }
    get center() {
      return vec3_exports.fromValues(
        (this.p1[0] + this.p2[0] + this.p3[0] + this.p4[0]) / 4,
        (this.p1[1] + this.p2[1] + this.p3[1] + this.p4[1]) / 4,
        (this.p1[2] + this.p2[2] + this.p3[2] + this.p4[2]) / 4
      );
    }
    static createRegularPrism(top, size) {
      let p1 = top;
      let sin = size * Math.sqrt(3) / 2;
      let cos = size / 2;
      let p2 = vec3_exports.fromValues(p1[0] + sin, p1[1], p1[2] + sin);
      let p3 = vec3_exports.fromValues(p1[0] - cos, p1[1] + sin, p1[2] + sin);
      let p4 = vec3_exports.fromValues(p1[0] - cos, p1[1] - sin, p1[2] + sin);
      return new TriangularPrism(p1, p2, p3, p4);
    }
    setWorld(world) {
      this._world = world;
      return this;
    }
    offset(x = 0, y = 0, z = 0) {
      for (let point of this.points) {
        vec3_exports.add(point, point, [x, y, z]);
      }
      return this;
    }
    render(camera) {
      mainCtx.strokeStyle = "transparent";
      if (!this.visible)
        return;
      if (!this._world) {
        throw new Error(`World is not set for ${this.constructor.name}`);
      }
      let p1 = this.points[0];
      let p2 = this.points[1];
      let p3 = this.points[2];
      let p4 = this.points[3];
      let m = mat4_exports.create();
      mat4_exports.fromTranslation(m, this.center);
      mat4_exports.rotate(m, m, this.rotation, this.rotationAxis);
      mat4_exports.scale(m, m, [this.scale, this.scale, this.scale]);
      let t = this._world.transformMatrix;
      mat4_exports.multiply(m, t, m);
      let p1t = vec3_exports.transformMat4(vec3_exports.create(), p1, m);
      let p2t = vec3_exports.transformMat4(vec3_exports.create(), p2, m);
      let p3t = vec3_exports.transformMat4(vec3_exports.create(), p3, m);
      let p4t = vec3_exports.transformMat4(vec3_exports.create(), p4, m);
      let normal1 = getNormal(p1t, p2t, p3t);
      let normal2 = getNormal(p1t, p3t, p4t);
      let normal3 = getNormal(p1t, p4t, p2t);
      let normal4 = getNormal(p2t, p4t, p3t);
      let normals = [normal1, normal2, normal3, normal4];
      let triangles = [[p1, p2, p3], [p1, p3, p4], [p1, p4, p2], [p2, p4, p3]];
      let dots = [];
      for (let i = 0; i < normals.length; i++) {
        let dot2 = vec3_exports.dot(normals[i], camera.direction);
        dots.push(dot2);
      }
      frameLog(`dots: ${dots}`);
      let center1 = getCenter(triangles[0]);
      let center2 = getCenter(triangles[1]);
      let center3 = getCenter(triangles[2]);
      let center4 = getCenter(triangles[3]);
      let centers = [center1, center2, center3, center4];
      let distances = centers.map((center) => vec3_exports.distance(center, camera.position));
      function setColor(dotVal) {
        let color = 255 - Math.abs(dotVal) * 125;
        if (color < 0)
          color = 0;
        if (color > 255)
          color = 255;
        mainCtx.fillStyle = `rgb(${color}, ${color}, ${color})`;
      }
      let sorted = [];
      for (let i = 0; i < 4; i++) {
        sorted.push({
          index: i,
          dot: dots[i],
          distance: distances[i]
        });
      }
      sorted.sort((a, b) => {
        return -(b.distance - a.distance);
      });
      for (let i = 0; i < 4; i++) {
        setColor(sorted[i].dot);
        let currTriangle = triangles[sorted[i].index];
        drawTriangle3D(currTriangle[0], currTriangle[1], currTriangle[2], m);
      }
    }
    get visible() {
      return true;
    }
  };

  // Scripts/Object3Ds/Viewport.ts
  var viewport = mat4_exports.create();
  mat4_exports.fromTranslation(viewport, [width / 2, width / 2, 0]);
  mat4_exports.scale(viewport, viewport, [1, -1, 1]);

  // Scripts/Debug.ts
  function mat4ToString(m, precision = 2) {
    let longest = 0;
    for (let i = 0; i < 16; i++) {
      longest = Math.max(longest, m[i].toFixed(precision).length);
    }
    let s = "";
    for (let i = 0; i < 16; i++) {
      s += m[i].toFixed(precision).padStart(longest, " ");
      if (i % 4 == 3) {
        s += "\n";
      } else {
        s += " ";
      }
    }
    return s;
  }

  // Scripts/Math/Random.ts
  var _Random = class {
    static get instance() {
      return _Random.i;
    }
    setSeed(seed) {
      this._seed = seed;
    }
    constructor(seed) {
      this._seed = seed;
    }
    next() {
      let x = Math.sin(this._seed++) * 1e4;
      return x - Math.floor(x);
    }
    nextInt(max2, min2 = 0) {
      return Math.floor(this.next() * max2) + min2;
    }
    nextIntRange(min2, max2) {
      return min2 + this.nextInt(max2 - min2);
    }
    nextFloat() {
      return this.next();
    }
  };
  var Random = _Random;
  Random.i = new _Random(new Date().getTime());
  var random2 = new Random(0);

  // Scripts/SmoothNumber.ts
  var SmoothNumber = class {
    constructor(value, decay = 0.5, needScale = true) {
      this.needScale = needScale;
      this._velocity = 0;
      this.decay = 0.5;
      this.scale = 10;
      this.vScale = 10;
      this.value = value;
      this.decay = decay;
    }
    get velocity() {
      return this._velocity / this.vScale;
    }
    set velocity(value) {
      this._velocity = value * this.vScale;
    }
    moveTowards(target) {
      this.velocity += target;
    }
    update() {
      this._value += this.velocity;
      this.velocity *= this.decay;
      if (Math.abs(this._velocity) < 1e-6) {
        this.velocity = 0;
      }
    }
    get value() {
      this.update();
      return this._value / this.scale;
    }
    set value(value) {
      this._value = value * this.scale;
    }
  };

  // Scripts/Object3Ds/Plane3D.ts
  var Plane3D = class {
    constructor(p1, p2, p3, p4) {
      this._visible = true;
      this._rotation = 0;
      this._axis = vec3_exports.fromValues(0, 0, 0);
      this._scale = 1;
      this._currTransform = mat4_exports.create();
      this.fillColor = "rgba(255, 255, 255, 1)";
      this.strokeColor = "black";
      this._points = [p1, p2, p3, p4];
    }
    get points() {
      return this._points;
    }
    static createFrom(pos, size) {
      return new Plane3D(
        vec3_exports.fromValues(pos[0], pos[1], pos[2]),
        vec3_exports.fromValues(pos[0] + size[0], pos[1], pos[2]),
        vec3_exports.fromValues(pos[0] + size[0], pos[1], pos[2] + size[2]),
        vec3_exports.fromValues(pos[0], pos[1], pos[2] + size[2])
      );
    }
    setWorld(world) {
      this._world = world;
    }
    get world() {
      return this._world;
    }
    get center() {
      return getCenter(this.points);
    }
    get rotation() {
      return this._rotation;
    }
    set rotation(value) {
      this._rotation = value;
    }
    get rotationAxis() {
      return this._axis;
    }
    get scale() {
      return this._scale;
    }
    render(camera) {
      if (!this.visible)
        return;
      if (!this._world) {
        throw new Error(`World is not set for ${this.constructor.name}`);
      }
      mainCtx.fillStyle = this.fillColor;
      let m = mat4_exports.create();
      mat4_exports.fromTranslation(m, this.center);
      mat4_exports.rotate(m, m, this.rotation, this.rotationAxis);
      mat4_exports.scale(m, m, [this.scale, this.scale, this.scale]);
      let t = this._world.transformMatrix;
      mat4_exports.multiply(m, t, m);
      this._currTransform = m;
      let ps = this.points;
      drawPlane3D(ps[0], ps[1], ps[2], ps[3], m);
    }
    get visible() {
      return this._visible;
    }
  };

  // Scripts/point.ts
  var Point2D = class {
    constructor(x, y) {
      this.arr = [x, y];
    }
    get x() {
      return this.arr[0];
    }
    set x(value) {
      this.arr[0] = value;
    }
    get y() {
      return this.arr[1];
    }
    set y(value) {
      this.arr[1] = value;
    }
  };

  // Scripts/Object3Ds/GridCell.ts
  var GridCell = class extends Plane3D {
    constructor() {
      super(...arguments);
      this._visited = false;
      this._hasWall = [true, true, true, true];
    }
    get pos() {
      return new Point2D(this.x, this.y);
    }
    get row() {
      return this.y;
    }
    get col() {
      return this.x;
    }
    get right() {
      return !this._hasWall[0];
    }
    set right(value) {
      this._hasWall[0] = value;
    }
    get top() {
      return this._hasWall[1];
    }
    set top(value) {
      this._hasWall[1] = value;
    }
    get left() {
      return this._hasWall[2];
    }
    set left(value) {
      this._hasWall[2] = value;
    }
    get bottom() {
      return this._hasWall[3];
    }
    set bottom(value) {
      this._hasWall[3] = value;
    }
    set visited(value) {
      this._visited = value;
      if (value) {
        this.fillColor = "rgba(100, 200, 0,1)";
      } else {
        this.fillColor = "rgba(255, 255, 255, 1)";
      }
    }
    set playerInCell(value) {
      if (value) {
        this.fillColor = "rgba(200, 100, 0,1)";
      } else {
        this.visited = this.visited;
      }
    }
    static createFromXY(x, y) {
      let relaSize = 0.3;
      let pos = vec3_exports.fromValues(x / 2 * relaSize, 0, y / 2 * relaSize);
      let size = vec3_exports.fromValues(relaSize, relaSize, relaSize);
      let re = new GridCell(
        vec3_exports.fromValues(pos[0], pos[1], pos[2]),
        vec3_exports.fromValues(pos[0] + size[0], pos[1], pos[2]),
        vec3_exports.fromValues(pos[0] + size[0], pos[1], pos[2] + size[2]),
        vec3_exports.fromValues(pos[0], pos[1], pos[2] + size[2])
      );
      re.x = x;
      re.y = y;
      return re;
    }
    get visited() {
      return this._visited;
    }
    render(camera) {
      super.render(camera);
      let oldStroke = mainCtx.strokeStyle;
      let oldFill = mainCtx.fillStyle;
      let oldLineWidth = mainCtx.lineWidth;
      mainCtx.strokeStyle = "black";
      if (this.top) {
        drawLine3D(this._points[3], this._points[0], this._currTransform);
      }
      if (this.left) {
        drawLine3D(this._points[0], this._points[1], this._currTransform);
      }
      if (this.bottom) {
        drawLine3D(this._points[2], this._points[3], this._currTransform);
      }
      if (this.right) {
        drawLine3D(this._points[1], this._points[2], this._currTransform);
      }
      mainCtx.strokeStyle = oldStroke;
      mainCtx.fillStyle = oldFill;
      mainCtx.lineWidth = oldLineWidth;
    }
  };

  // Scripts/Object3Ds/Grid3D.ts
  var Grid3D = class {
    constructor(row, col) {
      this._visible = true;
      this.cells = [];
      this.row = row;
      this.col = col;
      for (let i = 0; i < row; i++) {
        this.cells.push([]);
        for (let j = 0; j < col; j++) {
          this.cells[i].push(GridCell.createFromXY(i, j));
        }
      }
    }
    render(camera) {
      for (let i = 0; i < this.cells.length; i++) {
        for (let j = 0; j < this.cells[i].length; j++) {
          this.cells[i][j].render(camera);
        }
      }
    }
    set rotation(value) {
      for (let i = 0; i < this.cells.length; i++) {
        for (let j = 0; j < this.cells[i].length; j++) {
          this.cells[i][j].rotation = value;
        }
      }
    }
    setWorld(world) {
      for (let i = 0; i < this.cells.length; i++) {
        for (let j = 0; j < this.cells[i].length; j++) {
          this.cells[i][j].setWorld(world);
        }
      }
    }
    get visible() {
      return this._visible;
    }
    markVisited(pos) {
      this.cells[pos.y][pos.x].visited = true;
    }
    unvisit() {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          this.cells[i][j].visited = false;
        }
      }
    }
    openDoors() {
      this.startCell.top = false;
      this.startCell.visited = true;
      this.endCell.bottom = false;
    }
    getCellNeighbors(cell) {
      let neighbors = [];
      if (cell.row > 0) {
        neighbors.push(this.cells[cell.row - 1][cell.col]);
      }
      if (cell.row < this.row - 1) {
        neighbors.push(this.cells[cell.row + 1][cell.col]);
      }
      if (cell.col > 0) {
        neighbors.push(this.cells[cell.row][cell.col - 1]);
      }
      if (cell.col < this.col - 1) {
        neighbors.push(this.cells[cell.row][cell.col + 1]);
      }
      return neighbors;
    }
    removeWalls(a, b) {
      let x = a.col - b.col;
      if (x === 1) {
        a.left = false;
        b.right = false;
      } else if (x === -1) {
        a.right = false;
        b.left = false;
      }
      let y = a.row - b.row;
      if (y === 1) {
        a.top = false;
        b.bottom = false;
      } else if (y === -1) {
        a.bottom = false;
        b.top = false;
      }
    }
    setPixel(x, y, color) {
      let cell = this.cells[y][x];
      cell.fillColor = color;
    }
  };

  // Scripts/Object3Ds/PerspectiveProjection.ts
  var PerspectiveProjection = class {
    constructor(fov, aspect, near, far) {
      this.fov = fov;
      this.aspect = aspect;
      this.near = near;
      this.far = far;
    }
    get transformMatrix() {
      let m = mat4_exports.create();
      mat4_exports.perspective(m, this.fov, this.aspect, this.near, this.far);
      return m;
    }
    transformTo(t) {
      let m = this.transformMatrix;
      mat4_exports.multiply(m, t, m);
      return m;
    }
  };

  // Scripts/GameGrid.ts
  var GameGrid = class {
    constructor(rows2, cols2, pixelGrid) {
      this.rows = rows2;
      this.cols = cols2;
      this._pixels = [];
      this.zones = [];
      this.coins = [];
      this.updateCount = 0;
      this.turnNumber = 100;
      for (let y = 0; y < rows2; y++) {
        this._pixels[y] = [];
        for (let x = 0; x < cols2; x++) {
          this._pixels[y][x] = "white";
        }
      }
      this.player = new Player(Math.floor(cols2 / 2), Math.floor(rows2 / 2));
      this.pixelGrid = pixelGrid;
    }
    onGameEnd() {
    }
    movePlayer(x, y) {
      if (this.player.x + x >= 0 && this.player.x + x < this.cols && this.player.y + y >= 0 && this.player.y + y < this.rows) {
        this.player.x += x;
        this.player.y += y;
      }
    }
    clearPixels() {
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          this._pixels[y][x] = "white";
        }
      }
    }
    updatePixels() {
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          this.pixelGrid.setPixel(x, y, this._pixels[y][x]);
        }
      }
    }
    drawChildren() {
      this.clearPixels();
      for (let i = 0; i < this.zones.length; i++) {
        this.drawZone(this.zones[i]);
      }
      for (let i = 0; i < this.coins.length; i++) {
        this.drawPixel(this.coins[i].x, this.coins[i].y, this.coins[i].color);
      }
      this.drawPixel(this.player.x, this.player.y, this.player.color);
      this.updatePixels();
    }
    drawZone(zone) {
      for (let i = zone.x; i < zone.x + zone.w; i++) {
        for (let j = zone.y; j < zone.y + zone.h; j++) {
          this._pixels[j][i] = zone.color;
        }
      }
    }
    drawPixel(x, y, color) {
      this._pixels[y][x] = color;
    }
    updateChildren() {
      this.player.update();
      for (let i = 0; i < this.zones.length; i++) {
        this.zones[i].update();
      }
      for (let i = 0; i < this.coins.length; i++) {
        this.coins[i].update();
      }
    }
    updateLogic() {
      for (let i = 0; i < this.zones.length; i++) {
        let currZone = this.zones[i];
        if (currZone.inRange(this.player)) {
          this.onGameEnd();
        }
        if (currZone.ended) {
          this.zones.splice(i, 1);
          i--;
        }
      }
      for (let i = 0; i < this.coins.length; i++) {
        let currCoin = this.coins[i];
        if (currCoin.inRange(this.player)) {
          this.player.addCoin();
          currCoin.collect();
        }
        if (!currCoin.activated) {
          this.coins.splice(i, 1);
          i--;
        }
      }
    }
    update() {
      this.updateChildren();
      this.updateLogic();
      this.drawChildren();
      if (this.updateCount % this.turnNumber == 0) {
        this.zones.push(DangerZone.createRandom(this.cols, this.rows));
      }
      if (this.updateCount % 300 == 0) {
        this.coins.push(Coin.createRandom(this.cols, this.rows));
      }
      this.updateCount++;
    }
    getCell(x, y) {
      return this._pixels[y][x];
    }
  };
  var Coin = class {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vanishTime = 100;
      this.updateCount = 0;
      this.activated = true;
      this._blinkState = false;
      this.x = x;
      this.y = y;
    }
    static createRandom(cols2, rows2) {
      let x = Math.floor(Math.random() * cols2);
      let y = Math.floor(Math.random() * rows2);
      return new Coin(x, y);
    }
    collect() {
      this.activated = false;
    }
    update() {
      if (!this.activated) {
        return;
      }
      if (this.updateCount > this.vanishTime) {
        this.activated = false;
      }
      if (this.updateCount % 30 == 0) {
        this._blinkState = !this._blinkState;
      }
      this.updateCount++;
    }
    get color() {
      if (this._blinkState) {
        return `#FFD700`;
      }
      return "orange";
    }
    inRange(player) {
      return this.activated && this.x == player.x && this.y == player.y;
    }
  };
  var Zone = class {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.updateCount = 0;
    }
    get color() {
      if (this.activated) {
        return "red";
      }
      return `rgba(255, 100, 100, ${this.updateCount / 100})`;
    }
    update() {
      this.updateCount++;
    }
    get activated() {
      return true;
    }
    get ended() {
      return true;
    }
    inRange(player) {
      if (this.activated) {
        return player.x >= this.x && player.x < this.x + this.w && player.y >= this.y && player.y < this.y + this.h;
      }
      return false;
    }
  };
  var DangerZone = class extends Zone {
    constructor() {
      super(...arguments);
      this.damage = 1;
    }
    static createRandom(cols2, rows2) {
      let x = Math.floor(Math.random() * cols2);
      let y = Math.floor(Math.random() * rows2);
      let w = Math.floor(Math.random() * 10);
      if (w > cols2 - x) {
        w = cols2 - x;
      }
      let h = Math.floor(Math.random() * 10);
      if (h > rows2 - y) {
        h = rows2 - y;
      }
      return new DangerZone(x, y, w, h);
    }
    get activated() {
      return this.updateCount > 100;
    }
    get ended() {
      return this.updateCount > 200;
    }
  };
  var Player = class {
    constructor(defaultX, defaultY) {
      this.coins = 0;
      this.x = defaultX;
      this.y = defaultY;
      this.defaultX = defaultX;
      this.defaultY = defaultY;
    }
    addCoin() {
      this.coins++;
      scoreText.innerText = `Score: ${this.coins}`;
    }
    get color() {
      return "green";
    }
    update() {
    }
    kill() {
      this.x = this.defaultX;
      this.y = this.defaultY;
    }
    takeDamage(damage) {
      this.kill();
    }
  };

  // Scripts/Events.ts
  var frame = 0;
  var colorFrame = 0;
  var wheelOffset = new SmoothNumber(1e-3, 0.96);
  var playingDeadAnimation = false;
  var deadAnimation = 0;
  var deadAnimationDuration = 60;
  function frameLog(...args) {
    if (frame % 120 == 1)
      console.log(...args);
  }
  var rows = 11;
  var cols = 11;
  var grid = new Grid3D(rows, cols);
  var gameGrid = getGame();
  function getGame() {
    let game2 = new GameGrid(rows, cols, grid);
    game2.onGameEnd = onGameEnd;
    return game2;
  }
  function frameUpdate() {
    frame++;
    colorFrame++;
    gameGrid.update();
    let background = `hsl(${colorFrame / 10 % 360}, 50%, 50%)`;
    if (playingDeadAnimation) {
      let saturation = 150 - Math.min(100, deadAnimation / deadAnimationDuration * 100);
      background = `hsl(${0 % 360}, ${saturation}%, 50%)`;
      deadAnimation++;
      if (deadAnimation > deadAnimationDuration) {
        playingDeadAnimation = false;
        deadAnimation = 0;
        colorFrame = 0;
      }
    }
    drawBackground(background);
    frameLog(grid.toString());
    let projection = new PerspectiveProjection(wheelOffset.value, 1, 100, 1e7);
    let camera = new Camera3D();
    let world = new World3D();
    camera.setEye([eyeX.valueAsNumber, eyeY.valueAsNumber, eyeZ.valueAsNumber]);
    camera.setTarget([targetX.valueAsNumber, targetY.valueAsNumber, targetZ.valueAsNumber]);
    camera.setUp([upX.valueAsNumber, upY.valueAsNumber, upZ.valueAsNumber]);
    world.move(worldX.valueAsNumber, 0, worldY.valueAsNumber);
    world._scale = wheelOffset.value;
    let projectionTransform = projection.transformTo(viewport);
    let cameraTransform = camera.transformTo(projectionTransform);
    let worldTransform = world.transformTo(cameraTransform);
    let random3 = Random.instance;
    random3.setSeed(0);
    function randomVal() {
      return random3.nextFloat() * 2 - 1;
    }
    let pos = slider1.valueAsNumber / 100 * 2 - 1;
    function getRandPrism() {
      let ctlIndex = random3.nextInt(4);
      if (ctlIndex == 0) {
        return TriangularPrism.createRegularPrism([pos, randomVal(), randomVal()], random3.nextInt(3) + 1);
      }
      if (ctlIndex == 1) {
        return TriangularPrism.createRegularPrism([randomVal(), pos, randomVal()], random3.nextInt(3) + 1);
      }
      if (ctlIndex == 2) {
        return TriangularPrism.createRegularPrism([randomVal(), randomVal(), pos], random3.nextInt(3) + 1);
      }
      if (ctlIndex == 3) {
        return TriangularPrism.createRegularPrism([randomVal(), randomVal(), randomVal()], random3.nextInt(3) + 1);
      }
    }
    let objects = [
      getRandPrism(),
      getRandPrism(),
      getRandPrism(),
      getRandPrism(),
      grid
    ];
    for (let i = 0; i < objects.length; i++) {
      let object = objects[i];
      object.setWorld(world);
      object.rotation += frame / 100 + i;
      object.render(camera);
    }
    mainCtx.lineWidth = 3e-4 / wheelOffset.value;
    frameLog(`projectionTransform: 
${mat4ToString(projectionTransform)}`);
    frameLog(`cameraTransform: 
${mat4ToString(cameraTransform)}`);
    frameLog(`worldTransform: 
${mat4ToString(worldTransform)}`);
  }
  function onWheel(e) {
    console.log("onWheel");
    console.log(e);
    wheelOffset.moveTowards(e.deltaY / 2e6);
  }
  function onKeyDow(e) {
    console.log("onKeyDown");
    console.log(e);
    if (e.key == "ArrowUp" || e.key == "w") {
      gameGrid.movePlayer(0, -1);
    }
    if (e.key == "ArrowDown" || e.key == "s") {
      gameGrid.movePlayer(0, 1);
    }
    if (e.key == "ArrowLeft" || e.key == "a") {
      gameGrid.movePlayer(1, 0);
    }
    if (e.key == "ArrowRight" || e.key == "d") {
      gameGrid.movePlayer(-1, 0);
    }
  }
  function onGameEnd() {
    console.log("onGameEnd");
    playingDeadAnimation = true;
    gameGrid = getGame();
  }

  // Scripts/Init.ts
  function runFrameUpdate() {
    frameUpdate();
    window.requestAnimationFrame(runFrameUpdate);
  }
  function initEvents() {
    runFrameUpdate();
    mainCanvas.onwheel = (e) => {
      onWheel(e);
    };
    window.onkeydown = (e) => {
      onKeyDow(e);
    };
  }
  function initAll() {
    initEvents();
  }

  // Scripts/Game.ts
  var Game = class {
    constructor() {
      console.log("Hello World");
    }
    start() {
      console.log("Game started");
      let mat = mat4_exports.create();
      console.log(mat);
      initAll();
    }
  };

  // Scripts/Main.ts
  console.log("loading Main.ts");
  var game = new Game();
  game.start();
})();
//# sourceMappingURL=index.js.map
