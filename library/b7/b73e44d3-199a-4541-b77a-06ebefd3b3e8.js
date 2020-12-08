System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, resources, sys, _crd, ccclass, property, BlTools;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  _export("BlTools", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
      resources = _cc.resources;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b73e4TTGZpFQbd6Buvv07Po", "bl_tools", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (_BlTools) {
        var AudioManager = /*#__PURE__*/function (_Component) {
          _inheritsLoose(AudioManager, _Component);

          function AudioManager() {
            return _Component.apply(this, arguments) || this;
          }

          AudioManager.playMusic = function playMusic(name) {
            var path = "audio/music/" + name;
            resources.load(path, AudioClip, function (err, clip) {
              if (err) {
                console.warn(err);
                return;
              }

              clip === null || clip === void 0 ? void 0 : clip.setLoop(true);
              clip === null || clip === void 0 ? void 0 : clip.play();
            });
          };

          AudioManager.playSound = function playSound(name) {
            var path = "audio/sound/" + name;
            resources.load(path, AudioClip, function (err, clip) {
              if (err) {
                console.warn(err);
                return;
              }

              clip === null || clip === void 0 ? void 0 : clip.setLoop(false);
              clip === null || clip === void 0 ? void 0 : clip.playOneShot(1);
            });
          };

          return AudioManager;
        }(Component);

        _BlTools.AudioManager = AudioManager;

        var CustomEventListener = /*#__PURE__*/function (_Component2) {
          _inheritsLoose(CustomEventListener, _Component2);

          function CustomEventListener() {
            return _Component2.apply(this, arguments) || this;
          }

          CustomEventListener.on = function on(eventName, cb, target) {
            if (!this.handle[eventName]) {
              this.handle[eventName] = [];
            }

            var data = {
              func: cb,
              target: target
            };
            this.handle[eventName].push(data);
          };

          CustomEventListener.off = function off(eventName, cb, target) {
            var list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (var i = 0; i < list.length; i++) {
              var event = list[i];

              if (event.func === cb && (!target || target === event.target)) {
                list.splice(i, 1);
                break;
              }
            }
          };

          CustomEventListener.dispatchEvent = function dispatchEvent(eventName) {
            var list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            for (var i = 0; i < list.length; i++) {
              var event = list[i];
              event.func.apply(event.target, args);
            }
          };

          return CustomEventListener;
        }(Component);

        _defineProperty(CustomEventListener, "handle", {});

        _BlTools.CustomEventListener = CustomEventListener;

        var StorageUtil = /*#__PURE__*/function (_Component3) {
          _inheritsLoose(StorageUtil, _Component3);

          function StorageUtil() {
            return _Component3.apply(this, arguments) || this;
          }

          StorageUtil.dumpStorageMap = function dumpStorageMap() {
            var data = [];
            this.storageMap.forEach(function (v, k) {
              data.push({
                key: k,
                value: v
              });
            });
            console.table(data);
          };

          StorageUtil.clearCache = function clearCache() {
            this.storageMap.clear();
          };

          StorageUtil.read = function read(key, value) {
            var result = value;

            if (this.storageMap.has(key)) {
              return this.storageMap.get(key);
            }

            var userData = JSON.parse(sys.localStorage.getItem(key));

            if (userData !== null) {
              result = userData;
            }

            this.storageMap.set(key, result);
            return result;
          };

          StorageUtil.write = function write(key, value) {
            this.storageMap.set(key, value);
            sys.localStorage.setItem(key, JSON.stringify(value || null));
          };

          StorageUtil.remove = function remove(key) {
            this.storageMap["delete"](key);
            sys.localStorage.removeItem(key);
          };

          StorageUtil.clear = function clear() {
            this.storageMap.clear();
            sys.localStorage.clear();
          };

          return StorageUtil;
        }(Component);

        _defineProperty(StorageUtil, "storageMap", new Map());

        _BlTools.StorageUtil = StorageUtil;
      })(BlTools || _export("BlTools", BlTools = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvc2hpeXVhbmp1bi9jb2Nvc19jcmVhdG9yXzNkX2Jhc2UvYXNzZXRzL3NjcmlwdC9iYXNlL2JsX3Rvb2xzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJBdWRpb0NsaXAiLCJyZXNvdXJjZXMiLCJzeXMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBdWRpb01hbmFnZXIiLCJwbGF5TXVzaWMiLCJuYW1lIiwicGF0aCIsImxvYWQiLCJlcnIiLCJjbGlwIiwiY29uc29sZSIsIndhcm4iLCJzZXRMb29wIiwicGxheSIsInBsYXlTb3VuZCIsInBsYXlPbmVTaG90IiwiQ3VzdG9tRXZlbnRMaXN0ZW5lciIsIm9uIiwiZXZlbnROYW1lIiwiY2IiLCJ0YXJnZXQiLCJoYW5kbGUiLCJkYXRhIiwiZnVuYyIsInB1c2giLCJvZmYiLCJsaXN0IiwibGVuZ3RoIiwiaSIsImV2ZW50Iiwic3BsaWNlIiwiZGlzcGF0Y2hFdmVudCIsImFyZ3MiLCJhcHBseSIsIlN0b3JhZ2VVdGlsIiwiZHVtcFN0b3JhZ2VNYXAiLCJzdG9yYWdlTWFwIiwiZm9yRWFjaCIsInYiLCJrIiwia2V5IiwidmFsdWUiLCJ0YWJsZSIsImNsZWFyQ2FjaGUiLCJjbGVhciIsInJlYWQiLCJyZXN1bHQiLCJoYXMiLCJnZXQiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXQiLCJ3cml0ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmUiLCJyZW1vdmVJdGVtIiwiTWFwIiwiQmxUb29scyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxHLE9BQUFBLEc7Ozs7Ozs7QUFDcERDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OztZQUlBQyxZOzs7Ozs7O3VCQUVLQyxTLEdBQWQsbUJBQXdCQyxJQUF4QixFQUFzQztBQUNsQyxnQkFBTUMsSUFBSSxvQkFBa0JELElBQTVCO0FBQ0FOLFlBQUFBLFNBQVMsQ0FBQ1EsSUFBVixDQUFlRCxJQUFmLEVBQXFCUixTQUFyQixFQUFnQyxVQUFDVSxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUMzQyxrQkFBSUQsR0FBSixFQUFTO0FBQ0xFLGdCQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUgsR0FBYjtBQUNBO0FBQ0g7O0FBQ0RDLGNBQUFBLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxPQUFOLENBQWMsSUFBZDtBQUNBSCxjQUFBQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUksSUFBTjtBQUNILGFBUEQ7QUFRSCxXOzt1QkFFYUMsUyxHQUFkLG1CQUF3QlQsSUFBeEIsRUFBc0M7QUFDbEMsZ0JBQU1DLElBQUksb0JBQWtCRCxJQUE1QjtBQUNBTixZQUFBQSxTQUFTLENBQUNRLElBQVYsQ0FBZUQsSUFBZixFQUFxQlIsU0FBckIsRUFBZ0MsVUFBQ1UsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDM0Msa0JBQUlELEdBQUosRUFBUztBQUNMRSxnQkFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWFILEdBQWI7QUFDQTtBQUNIOztBQUNEQyxjQUFBQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUcsT0FBTixDQUFjLEtBQWQ7QUFDQUgsY0FBQUEsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVNLFdBQU4sQ0FBa0IsQ0FBbEI7QUFDSCxhQVBEO0FBUUgsVzs7O1VBeEI2QmxCLFM7Ozs7WUFrQ3JCbUIsbUI7Ozs7Ozs7OEJBR0tDLEUsR0FBZCxZQUFpQkMsU0FBakIsRUFBb0NDLEVBQXBDLEVBQWtEQyxNQUFsRCxFQUFnRTtBQUM1RCxnQkFBSSxDQUFDLEtBQUtDLE1BQUwsQ0FBWUgsU0FBWixDQUFMLEVBQTZCO0FBQ3pCLG1CQUFLRyxNQUFMLENBQVlILFNBQVosSUFBeUIsRUFBekI7QUFDSDs7QUFDRCxnQkFBTUksSUFBZ0IsR0FBRztBQUFFQyxjQUFBQSxJQUFJLEVBQUVKLEVBQVI7QUFBWUMsY0FBQUEsTUFBTSxFQUFOQTtBQUFaLGFBQXpCO0FBQ0EsaUJBQUtDLE1BQUwsQ0FBWUgsU0FBWixFQUF1Qk0sSUFBdkIsQ0FBNEJGLElBQTVCO0FBQ0gsVzs7OEJBRWFHLEcsR0FBZCxhQUFrQlAsU0FBbEIsRUFBcUNDLEVBQXJDLEVBQW1EQyxNQUFuRCxFQUFpRTtBQUM3RCxnQkFBTU0sSUFBSSxHQUFHLEtBQUtMLE1BQUwsQ0FBWUgsU0FBWixDQUFiOztBQUNBLGdCQUFJLENBQUNRLElBQUQsSUFBU0EsSUFBSSxDQUFDQyxNQUFMLElBQWUsQ0FBNUIsRUFBK0I7QUFDM0I7QUFDSDs7QUFDRCxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNDLE1BQXpCLEVBQWlDQyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGtCQUFNQyxLQUFLLEdBQUdILElBQUksQ0FBQ0UsQ0FBRCxDQUFsQjs7QUFDQSxrQkFBSUMsS0FBSyxDQUFDTixJQUFOLEtBQWVKLEVBQWYsS0FBc0IsQ0FBQ0MsTUFBRCxJQUFXQSxNQUFNLEtBQUtTLEtBQUssQ0FBQ1QsTUFBbEQsQ0FBSixFQUErRDtBQUMzRE0sZ0JBQUFBLElBQUksQ0FBQ0ksTUFBTCxDQUFZRixDQUFaLEVBQWUsQ0FBZjtBQUNBO0FBQ0g7QUFDSjtBQUNKLFc7OzhCQUVhRyxhLEdBQWQsdUJBQTRCYixTQUE1QixFQUE2RDtBQUN6RCxnQkFBTVEsSUFBSSxHQUFHLEtBQUtMLE1BQUwsQ0FBWUgsU0FBWixDQUFiOztBQUNBLGdCQUFJLENBQUNRLElBQUQsSUFBU0EsSUFBSSxDQUFDQyxNQUFMLElBQWUsQ0FBNUIsRUFBK0I7QUFDM0I7QUFDSDs7QUFKd0QsOENBQVhLLElBQVc7QUFBWEEsY0FBQUEsSUFBVztBQUFBOztBQUt6RCxpQkFBSyxJQUFJSixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNDLE1BQXpCLEVBQWlDQyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGtCQUFNQyxLQUFLLEdBQUdILElBQUksQ0FBQ0UsQ0FBRCxDQUFsQjtBQUNBQyxjQUFBQSxLQUFLLENBQUNOLElBQU4sQ0FBV1UsS0FBWCxDQUFpQkosS0FBSyxDQUFDVCxNQUF2QixFQUErQlksSUFBL0I7QUFDSDtBQUNKLFc7OztVQWxDb0NuQyxTOzt3QkFBNUJtQixtQixZQUNzQixFOzs7O1lBb0N0QmtCLFc7Ozs7Ozs7c0JBSUtDLGMsR0FBZCwwQkFBK0I7QUFDM0IsZ0JBQU1iLElBQUksR0FBRyxFQUFiO0FBQ0EsaUJBQUtjLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQzlCakIsY0FBQUEsSUFBSSxDQUFDRSxJQUFMLENBQVU7QUFBRWdCLGdCQUFBQSxHQUFHLEVBQUVELENBQVA7QUFBVUUsZ0JBQUFBLEtBQUssRUFBRUg7QUFBakIsZUFBVjtBQUNILGFBRkQ7QUFHQTVCLFlBQUFBLE9BQU8sQ0FBQ2dDLEtBQVIsQ0FBY3BCLElBQWQ7QUFDSCxXOztzQkFFYXFCLFUsR0FBZCxzQkFBMkI7QUFDdkIsaUJBQUtQLFVBQUwsQ0FBZ0JRLEtBQWhCO0FBQ0gsVzs7c0JBRWFDLEksR0FBZCxjQUFzQkwsR0FBdEIsRUFBbUNDLEtBQW5DLEVBQWlEO0FBQzdDLGdCQUFJSyxNQUFNLEdBQUdMLEtBQWI7O0FBQ0EsZ0JBQUksS0FBS0wsVUFBTCxDQUFnQlcsR0FBaEIsQ0FBb0JQLEdBQXBCLENBQUosRUFBOEI7QUFDMUIscUJBQU8sS0FBS0osVUFBTCxDQUFnQlksR0FBaEIsQ0FBb0JSLEdBQXBCLENBQVA7QUFDSDs7QUFDRCxnQkFBTVMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV25ELEdBQUcsQ0FBQ29ELFlBQUosQ0FBaUJDLE9BQWpCLENBQXlCYixHQUF6QixDQUFYLENBQWpCOztBQUNBLGdCQUFJUyxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJILGNBQUFBLE1BQU0sR0FBR0csUUFBVDtBQUNIOztBQUNELGlCQUFLYixVQUFMLENBQWdCa0IsR0FBaEIsQ0FBb0JkLEdBQXBCLEVBQXlCTSxNQUF6QjtBQUNBLG1CQUFPQSxNQUFQO0FBQ0gsVzs7c0JBRWFTLEssR0FBZCxlQUF1QmYsR0FBdkIsRUFBb0NDLEtBQXBDLEVBQThDO0FBQzFDLGlCQUFLTCxVQUFMLENBQWdCa0IsR0FBaEIsQ0FBb0JkLEdBQXBCLEVBQXlCQyxLQUF6QjtBQUNBekMsWUFBQUEsR0FBRyxDQUFDb0QsWUFBSixDQUFpQkksT0FBakIsQ0FBeUJoQixHQUF6QixFQUE4QlUsSUFBSSxDQUFDTyxTQUFMLENBQWVoQixLQUFLLElBQUksSUFBeEIsQ0FBOUI7QUFDSCxXOztzQkFFYWlCLE0sR0FBZCxnQkFBcUJsQixHQUFyQixFQUFrQztBQUM5QixpQkFBS0osVUFBTCxXQUF1QkksR0FBdkI7QUFDQXhDLFlBQUFBLEdBQUcsQ0FBQ29ELFlBQUosQ0FBaUJPLFVBQWpCLENBQTRCbkIsR0FBNUI7QUFDSCxXOztzQkFFYUksSyxHQUFkLGlCQUFzQjtBQUNsQixpQkFBS1IsVUFBTCxDQUFnQlEsS0FBaEI7QUFDQTVDLFlBQUFBLEdBQUcsQ0FBQ29ELFlBQUosQ0FBaUJSLEtBQWpCO0FBQ0gsVzs7O1VBMUM0Qi9DLFM7O3dCQUFwQnFDLFcsZ0JBRXlDLElBQUkwQixHQUFKLEU7OztTQTNFekNDLE8sdUJBQUFBLE8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBBdWRpb0NsaXAsIHJlc291cmNlcywgc3lzIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuZXhwb3J0IG5hbWVzcGFjZSBCbFRvb2xzIHtcblxuICAgIGV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcGxheU11c2ljKG5hbWU6IHN0cmluZykge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGBhdWRpby9tdXNpYy8ke25hbWV9YDtcbiAgICAgICAgICAgIHJlc291cmNlcy5sb2FkKHBhdGgsIEF1ZGlvQ2xpcCwgKGVyciwgY2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xpcD8uc2V0TG9vcCh0cnVlKTtcbiAgICAgICAgICAgICAgICBjbGlwPy5wbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcGxheVNvdW5kKG5hbWU6IHN0cmluZykge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGBhdWRpby9zb3VuZC8ke25hbWV9YDtcbiAgICAgICAgICAgIHJlc291cmNlcy5sb2FkKHBhdGgsIEF1ZGlvQ2xpcCwgKGVyciwgY2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xpcD8uc2V0TG9vcChmYWxzZSk7XG4gICAgICAgICAgICAgICAgY2xpcD8ucGxheU9uZVNob3QoMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGludGVyZmFjZSBJRXZlbnREYXRhIHtcbiAgICAgICAgZnVuYzogRnVuY3Rpb247XG4gICAgICAgIHRhcmdldDogYW55O1xuICAgIH1cbiAgICBpbnRlcmZhY2UgSUV2ZW50IHtcbiAgICAgICAgW2V2ZW50TmFtZTogc3RyaW5nXTogSUV2ZW50RGF0YVtdO1xuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tRXZlbnRMaXN0ZW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaGFuZGxlOiBJRXZlbnQgPSB7fTtcblxuICAgICAgICBwdWJsaWMgc3RhdGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhbmRsZVtldmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YTogSUV2ZW50RGF0YSA9IHsgZnVuYzogY2IsIHRhcmdldCB9O1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXS5wdXNoKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5mdW5jID09PSBjYiAmJiAoIXRhcmdldCB8fCB0YXJnZXQgPT09IGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2hFdmVudChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgIGV2ZW50LmZ1bmMuYXBwbHkoZXZlbnQudGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTdG9yYWdlVXRpbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc3RvcmFnZU1hcDogTWFwPHN0cmluZywgdW5rbm93bj4gPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBkdW1wU3RvcmFnZU1hcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXSBhcyBhbnk7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VNYXAuZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7IGtleTogaywgdmFsdWU6IHYgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIGNsZWFyQ2FjaGUoKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VNYXAuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZDxUPihrZXk6IHN0cmluZywgdmFsdWU/OiBUKTogVCB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yYWdlTWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZU1hcC5nZXQoa2V5KSBhcyBUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKHN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHVzZXJEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlTWFwLnNldChrZXksIHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0IGFzIFQ7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIHdyaXRlPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlTWFwLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlIHx8IG51bGwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICBzeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2xlYXIoKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VNYXAuY2xlYXIoKTtcbiAgICAgICAgICAgIHN5cy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=